export type ShopContextInterface = {
  allProductData: [],
  errorMessage: string
}

export const shopContextDefaultValues: ShopContextInterface = {
  allProductData: [],
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