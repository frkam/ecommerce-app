export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  discountPercentage: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface IProducts {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface IProductsState {
  products: IProducts;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}
