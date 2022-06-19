import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICart, IItem } from 'types/cart.types'
import { getCartItems, addItemToCart } from './cartThunk'

const initialState: ICart = {
  items: [],
  isLoading: false,
  error: false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addItemToCart(state: ICart, action: PayloadAction<IItem>) {
    //
    // },
    // deleteItemFromCart(state: ICart, action: PayloadAction<number>) {
    //   const findItem = state.items.find((item) => item.id === action.payload)
    //   if (findItem) {
    //     findItem.quantity--
    //   }
    //   if (findItem!.quantity < 1) {
    //     state.items = state.items.filter((item) => item.id !== findItem?.id)
    //   }
    // },
    // removeItemFromCart(state: ICart, action: PayloadAction<number>) {
    //   state.items = state.items.filter((item) => item.id !== action.payload)
    // },
    // deleteAllItemsFromCart(state: ICart) {
    //   state.items = []
    // },
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

        console.log(action.payload)

        const sortedItemsByTimestamp = action.payload!.sort((first, second) => {
          return second.timestamp - first.timestamp
        })

        state.items = sortedItemsByTimestamp || initialState.items
      })
      .addCase(getCartItems.rejected, (state, action) => {
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
  },
})

// export const {
//   addItemToCart,
//   deleteAllItemsFromCart,
//   deleteItemFromCart,
//   removeItemFromCart,
// } = cartSlice.actions
