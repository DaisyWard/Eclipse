import { useReducer } from 'react'
import ShopContext from './Shop.context'
import ShopReducer from './Shop.reducer'

const ShopContextProvider = () => {
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
