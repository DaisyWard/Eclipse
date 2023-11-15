'use client';

import { FC, useReducer, useEffect } from 'react'

import ShopContext from './Shop.context'
import ShopReducer from './Shop.reducer'
import { ProductProps, Props } from './Shop.types';
import {
  FETCH_FAILURE,
  FETCH_SUCCESS,
  SAVE_PRODUCT_DATA
} from '@context/Shop.constants'

const ShopContextProvider: FC<Props> = ({ children }) =>  {
  const initialValues = {
    allProductData: {},
    errorMessage: '',
    productData: []
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
      console.log(result)
      orderProductsByReview(result)
    }
  }

  const orderProductsByReview = (result: ProductProps[])=> {
    const moose = result.sort((a, b) => b.rating-a.rating)

    dispatch({ type: SAVE_PRODUCT_DATA, payload: moose })
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    removeAppleProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.allProductData])

  const value = {
    productData: state.productData,
    errorMessage: state.errorMessage
  }

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
