import { createAsyncThunk } from '@reduxjs/toolkit'
import { deleteDoc, doc, getDoc } from 'firebase/firestore'
import { db } from 'firebase-config'
import { toast } from 'react-toastify'
import {
  addDocumentFirestore,
  getCollectionsFromFirestore,
  getDocsFromFirestore,
  updateDocumentFirestore,
} from 'services/firebase.service'
import { ICartItem, IItem } from 'types/cart.types'

export const getCartItems = createAsyncThunk(
  'cart/getAllItems',
  async ({ email }: { email: string }) => {
    try {
      return await getCollectionsFromFirestore<ICartItem>('shop-cart', [
        email,
        'cart',
      ])
    } catch {
      toast.error('Cannot get items from cart')
    }
  }
)

export const addItemToCart = createAsyncThunk(
  'cart/addItemToCart',
  async ({
    data,
    email,
    itemID,
  }: {
    data: IItem
    email: string
    itemID: string
  }) => {
    const cartItem = { ...data, quantity: 1, timestamp: Date.now() }
    try {
      const cartItemReference = doc(db, 'shop-cart', email, 'cart', itemID)

      const docSnapshot = await getDoc(cartItemReference)

      if (docSnapshot.exists()) {
        const data = docSnapshot.data()
        let quantity = data.quantity
        quantity++
        const promise = updateDocumentFirestore({ quantity }, 'shop-cart', [
          email,
          'cart',
          itemID,
        ])
        toast.promise(promise, {
          pending: `The item is being added to the cart...`,
          success: `"${data.title}" was added to cart. Its quantity: ${quantity}`,
          error: `The item was not added to the cart`,
        })
      } else {
        const promise = addDocumentFirestore(cartItem, 'shop-cart', [
          email,
          'cart',
          itemID,
        ])
        toast.promise(promise, {
          pending: `The item is being added to the cart...`,
          success: `"${cartItem.title}" was added to cart.`,
          error: `The item was not added to the cart`,
        })
      }

      return cartItem
    } catch {
      toast.error(`Cannot add item to cart`)
    }
  }
)

export const changeQuantityOfItem = createAsyncThunk(
  'cart/increaseQuantityOfItem',
  async ({
    itemId,
    email,
    quantity,
    type,
  }: {
    itemId: number
    type: 'increase' | 'reduce'
    email: string
    quantity: number
  }) => {
    const docReference = doc(db, 'shop-cart', email, 'cart', itemId.toString())

    const docSnapshot = await getDoc(docReference)

    const itemData = docSnapshot.data() as ICartItem

    if (itemData.quantity <= 1 && type === 'reduce') {
      deleteDoc(docReference)
      return { itemId }
    }

    if (itemData.quantity >= 1) {
      let changedQuantity: number

      if (type === 'increase') {
        changedQuantity = itemData.quantity + quantity
      } else {
        changedQuantity = itemData.quantity - quantity
      }

      updateDocumentFirestore({ quantity: changedQuantity }, 'shop-cart', [
        email,
        'cart',
        itemId.toString(),
      ])

      return { changedQuantity, itemId }
    }
  }
)

export const clearCart = createAsyncThunk(
  'cart/deleteAllItems',
  async ({ email }: { email: string }) => {
    try {
      const itemDocs = await getDocsFromFirestore('shop-cart', [email, 'cart'])

      if (itemDocs.size > 0) {
        itemDocs.forEach(async (itemDoc) => {
          await deleteDoc(itemDoc.ref)
        })

        toast.success('Your cart has been successfully emptied')
      } else {
        toast.warn('You cart is already empty')
      }
    } catch {
      toast.error('The cart has not been emptied')
    }
  }
)
