import axios from "axios"

import { IProducts } from "types/products.types"

const getProducts = async (categoryName: string) => {
  const response = await axios.get<IProducts>(
    `https://dummyjson.com/products/category/${categoryName}`
  )

  return response
}

const productService = {
  getProducts,
}

export default productService
