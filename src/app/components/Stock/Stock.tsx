import { FC } from 'react'

import styles from '@styles/components/Stock.module.scss'

import { StockComponentProps } from '@context/Shop.types'

const Stock: FC<StockComponentProps> = ({ stock }): JSX.Element => {
  if (stock > 50) {
    return (
      <div>
        <p>Good stock levels</p>
      </div>
    )
  } else {
    return (
      <div>
        <p>Low stock levels</p>
      </div>
    )
  }

}

export default Stock
