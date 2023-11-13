import { FC, useContext } from 'react'

import styles from '@styles/components/Product.module.scss'

import { Props } from '@context/Shop.types'
import ShopContext from '@/app/context/Shop.context'

import { ProductProps } from '@context/Shop.types'

const Product: FC<ProductProps> = ({ data }): JSX.Element => {
  return (
    <>
      <h1>{data.title}</h1>
    </>
  )
}

export default Product
