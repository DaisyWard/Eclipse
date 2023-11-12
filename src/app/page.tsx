"use client"

import { useContext } from "react"

import ShopContext from "./context/Shop.context"

const Home = () => {
  const { allProductData } = useContext(ShopContext)

  console.log(allProductData)

  return (
    <h2>Hello world</h2>
  )
}

export default Home
