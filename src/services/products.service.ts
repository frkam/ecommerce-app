import axios from "axios";

import { IProducts } from "types/products.types";

const getProducts = async (categoryName: string) => {
  const responce = await axios.get<IProducts>(
    `https://dummyjson.com/products/category/${categoryName}`
  );

  return responce;
};

const productService = {
  getProducts,
};

export default productService;
