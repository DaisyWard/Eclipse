import { FC } from 'react'

import styles from '@styles/components/Prices.module.scss'

import { PriceComponentProps } from '@context/Shop.types'

const Prices: FC<PriceComponentProps> = ({ originalPrice, priceNow }): JSX.Element => {

  return (
    <div>
      <p>RRP £{parseFloat(originalPrice.toFixed(2))}</p>
      <p>Now £{parseFloat(priceNow.toFixed(2))}</p>
      <p>Save £{parseFloat((originalPrice - priceNow).toFixed(2))}</p>
    </div>
  )
}

export default Prices
