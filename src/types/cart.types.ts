export interface IItem {
  id: number
  title: string
  price: number
  image: string
  category: string
}

export interface ICartItem extends IItem {
  quantity: number
  timestamp: number
}

export interface ICart {
  items: ICartItem[]
  isLoading: boolean
  error: boolean
}
