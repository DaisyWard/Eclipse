export interface ShopContextInterface {
  errorMessage: string;
  productData: ProductProps[];
}

export const shopContextDefaultValues: ShopContextInterface = {
  errorMessage: '',
  productData: [{
    brand: '',
    category: '',
    description: '',
    discountPercentage: 0,
    id: 0,
    images: [],
    price: 0,
    rating: 0,
    stock: 0,
    thumbnail: '',
    title: ''
  }]
};

export interface MetaProps {
  title: string
  keywords: string
  description: string
}

export interface Props {
  children: React.ReactNode
}

export interface ProductDataProps {
  limit: number,
  products: ProductProps,
  skip: number,
  total: number
}

export interface ProductProps {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

interface ImageProps {
  id: string
}
