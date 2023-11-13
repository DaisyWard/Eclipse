export type ShopContextInterface = {
  allProductData: ProductData,
  errorMessage: string
}

export const shopContextDefaultValues: ShopContextInterface = {
  allProductData: {} as ProductData,
  errorMessage: ''
}

export interface MetaProps {
  title: string
  keywords: string
  description: string
}

export interface Props {
  children: React.ReactNode
}

export interface ProductData {
  limit: number,
  products: any,
  skip: number,
  total: number
}

export interface Product {
  brand: string,
  category: string,
  description: string,
  discountPercentage: number,
  id: number,
  images: ImageProps[],
  price: number,
  rating: number,
  stock: number,
  thumbnail: string,
  title: string
}

interface ImageProps {
  id: string
}

export interface ProductProps {
  data: Product
}