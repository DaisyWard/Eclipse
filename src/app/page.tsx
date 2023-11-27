'use client'

import { useContext } from 'react'

import ShopContext from './context/Shop.context'
import Product from './components/Product'

const Home = () => {
  const { productData, errorMessage } = useContext(ShopContext)

  if (productData instanceof Array ) {
    return (
      productData instanceof Array &&
      productData.length > 0 ?
      productData.map((product) => (
        <Product key={product.id} data={product} />
      ))
      :
        <>
          <p>{errorMessage}</p>
        </>
    )
  }
}

export default Home
