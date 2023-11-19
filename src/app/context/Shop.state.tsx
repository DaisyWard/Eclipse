'use client'

import { FC, useReducer, useEffect, useState, useRef } from 'react'

import ShopContext from './Shop.context'
import ShopReducer from './Shop.reducer'
import { ProductProps, Props } from './Shop.types'
import {
  FETCH_FAILURE,
  FETCH_SUCCESS,
  SAVE_PRODUCT_DATA,
  UPDATE_STALE_DATA
} from '@context/Shop.constants'

const ShopContextProvider: FC<Props> = ({ children }) =>  {
  const initialValues = {
    allProductData: {},
    errorMessage: '',
    productData: [],
    lastRefreshTime: null,
    dataIsStale: false,
  }

  const [state, dispatch] = useReducer(ShopReducer, initialValues)

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products')
      const jsonData = await response.json();
      dispatch({ type: FETCH_SUCCESS, payload: jsonData })
    } catch (error) {
      dispatch({ type: FETCH_FAILURE, payload: error })
    }
  }

  const removeAppleProducts = () => {
    if (state.allProductData.products instanceof Array) {
      const result = state.allProductData.products.filter((product: ProductProps) => product.brand !== 'Apple')
      orderProductsByReview(result)
    }
  }

  const orderProductsByReview = (result: ProductProps[])=> {
    const products = result.sort((a, b) => b.rating-a.rating)

    dispatch({ type: SAVE_PRODUCT_DATA, payload: products })

    localStorage.setItem('data', JSON.stringify(products))
  }

  const setDataIsStale = (value: boolean) => {
    localStorage.setItem('data-is-stale', value.toString())
    dispatch({ type: UPDATE_STALE_DATA, payload: true })
  }

  useEffect(() => {
    removeAppleProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.allProductData])

  useEffect(() => {
    const dataState = localStorage.getItem('data-is-stale') ? localStorage.getItem('data-is-stale') : false
    const data = localStorage.getItem('data')
    setDataIsStale(false)

    if (dataState === 'true' || data === null) {
      fetchData()
    } else {
      if (data !== null) dispatch({ type: SAVE_PRODUCT_DATA, payload: JSON.parse(data) })
    }


  }, [])

  const value = {
    productData: state.productData,
    errorMessage: state.errorMessage,
    setDataIsStale,
  }

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
