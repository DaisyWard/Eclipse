'use client';

import { FC, useReducer } from 'react'
import ShopContext from './Shop.context'
import ShopReducer from './Shop.reducer'
import { Props } from './Shop.types';

const ShopContextProvider: FC<Props> = ({ children }) =>  {
  const initialValues = {
  }

  const [state, dispatch] = useReducer(ShopReducer, initialValues)

  const value = {

  }

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
