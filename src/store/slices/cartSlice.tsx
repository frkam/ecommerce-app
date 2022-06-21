import { createSlice } from '@reduxjs/toolkit'
import { ICart } from 'types/cart.types'
import {
  addItemToCart,
  changeQuantityOfItem,
  clearCart,
  getCartItems,
} from './cartThunk'

const initialState: ICart = {
  items: [],
  isLoading: false,
  error: false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true
        state.items = []
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = false

        const sortedItemsByTimestamp = action.payload!.sort((first, second) => {
          return second.timestamp - first.timestamp
        })

        state.items = sortedItemsByTimestamp || initialState.items
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false
        state.error = true
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        const findItem = state.items.find(
          (item) => item.id === action.payload!.id
        )
        if (findItem) {
          findItem.quantity++
        } else {
          state.items.unshift({ ...action.payload!, quantity: 1 })
        }
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.items = []
      })
      .addCase(changeQuantityOfItem.fulfilled, (state, action) => {
        if (action.payload?.changedQuantity && action.payload.itemId) {
          const findItemIndex = state.items.findIndex(
            (item) => item.id === Number(action.payload?.itemId)
          )

          state.items[findItemIndex].quantity = action.payload.changedQuantity
        } else if (action.payload?.itemId) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload?.itemId
          )
        }
      })
  },
})
