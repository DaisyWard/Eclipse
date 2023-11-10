import { createContext } from 'react'

import {
  ShopContextInterface,
  shopContextDefaultValues
} from './Shop.types'

const ShopSearchContext = createContext<ShopContextInterface>(
  shopContextDefaultValues
)

export default ShopSearchContext
