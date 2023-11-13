'use client';

import { FC, useReducer, useEffect } from 'react'

import ShopContext from './Shop.context'
import ShopReducer from './Shop.reducer'
import { Props } from './Shop.types';
import {
  FETCH_FAILURE,
  FETCH_SUCCESS
} from '@context/Shop.constants'

const ShopContextProvider: FC<Props> = ({ children }) =>  {
  const initialValues = {
    allProductData: {},
    errorMessage: ''
  }

  const [state, dispatch] = useReducer(ShopReducer, initialValues)

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products?limit=10')
      const jsonData = await response.json();
      dispatch({ type: FETCH_SUCCESS, payload: jsonData })
    } catch (error) {
      dispatch({ type: FETCH_FAILURE, payload: error })
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  const value = {
    allProductData: state.allProductData,
    errorMessage: state.errorMessage
  }

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
