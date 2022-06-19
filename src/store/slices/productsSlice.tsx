import { createSlice } from '@reduxjs/toolkit'
import { IProductsState } from '../../types/products.types'
import { getProductsByCategoryName } from './productThunk'

const initialState: IProductsState = {
  products: {
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  },
  isLoading: false,
  isSuccess: false,
  isError: false,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsByCategoryName.pending, (state) => {
        state.isLoading = true
        state.products.products = []
      })
      .addCase(getProductsByCategoryName.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.products = action.payload?.data || initialState.products
      })
      .addCase(getProductsByCategoryName.rejected, (state) => {
        state.isError = true
        state.isLoading = false
        state.products.products = []
      })
  },
})
