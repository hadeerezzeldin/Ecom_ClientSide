export interface IProduct {
  productName: string
  description: string
  oldPrice: number
  newPrice: number
  quantity: number
  categoryName: string
  photos: Photo[]
}

export interface Photo {
  image: string
  productId: number
}