import { createAsyncThunk } from '@reduxjs/toolkit'
import productService from 'services/products.service'

export const getProductsByCategoryName = createAsyncThunk(
  'products',
  async (categoryName: string) => {
    try {
      return await productService.getProducts(categoryName)
    } catch (error) {
      console.error('Error' + error)
    }
  }
)
