import { createContext } from 'react'

import {
  ShopContextInterface,
  shopContextDefaultValues
} from './Shop.types'

const ShopContext = createContext<ShopContextInterface>(
  shopContextDefaultValues
)

export default ShopContext
