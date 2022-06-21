import { createAsyncThunk } from '@reduxjs/toolkit'
import { doc, getDoc } from 'firebase/firestore'
import {
  addDocFirestore,
  getItemsFromCart,
  updateDocFirestore,
} from 'services/firebase.service'
import { IItem } from 'types/cart.types'
import { db } from 'firebase-config'
import { toast } from 'react-toastify'

export const getCartItems = createAsyncThunk(
  'cart/getAllItems',
  async ({ email }: { email: string }) => {
    try {
      return await getItemsFromCart(email)
    } catch {
      console.log('Cannot get items from cart')
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
        data.quantity++
        const promise = updateDocFirestore(
          { ...data, quantity: data.quantity },
          'shop-cart',
          [email, 'cart', itemID]
        )
        toast.promise(promise, {
          pending: `The item is being added to the cart...`,
          success: `${data.title} was added to cart. Its quantity: ${data.quantity}`,
          error: `The item was not added to the cart`,
        })
      } else {
        await addDocFirestore(cartItem, 'shop-cart', [email, 'cart', itemID])
        toast.success(
          `Item ${cartItem.title} was added to cart. Its quantity: ${cartItem.quantity}`
        )
      }

      return cartItem
    } catch {
      toast.error(`Cannot add item to cart`)
    }
  }
)
