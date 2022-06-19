import { createAsyncThunk } from '@reduxjs/toolkit'
import { addDocFirestore, getItemsFromCart } from 'services/firebase.service'
import { IItem } from 'types/cart.types'

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
  async ({ data, email }: { data: IItem; email: string }) => {
    const cartItem = { ...data, quantity: 1, timestamp: Date.now() }

    try {
      await addDocFirestore(cartItem, 'shop-cart', [email, 'cart'])
      return cartItem
    } catch (e: any) {
      console.log('Cannot add item to cart' + e)
    }
  }
)
