import { FC } from 'react'

import styles from '@styles/components/Prices.module.scss'

import { PriceComponentProps } from '@context/Shop.types'

const Prices: FC<PriceComponentProps> = ({ price, discount }): JSX.Element => {
  const discountedPrice = price - (price * (discount / 100))

  return (
    <div>
      <p>RRP £{parseFloat(price.toFixed(2))}</p>
      <p>Now £{parseFloat(discountedPrice.toFixed(2))}</p>
      <p>Save £{parseFloat((price - discountedPrice).toFixed(2))}</p>
    </div>
  )
}

export default Prices
