"use client"

import { useContext } from "react"

import ShopContext from "./context/Shop.context"
import Product from "./components/Product"

const Home = () => {
  const { allProductData } = useContext(ShopContext)

  if (typeof allProductData === 'object' && allProductData !== null) {

    return (
      allProductData.products instanceof Array &&
      allProductData.products.map((product) => (
        <Product key={product.id} data={product} />
      ))
    )
  }
}

export default Home
