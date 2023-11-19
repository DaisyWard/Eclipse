import { FC } from 'react'

import styles from '@styles/components/Prices.module.scss'

import { PriceComponentProps } from '@context/Shop.types'

const Prices: FC<PriceComponentProps> = ({ originalPrice, priceNow, isRecommended }): JSX.Element => {

  return (
    <div>
      <p className={styles.rrpPrice}>RRP £{parseFloat(originalPrice.toFixed(2))}</p>
      <p className={`${styles.priceNow} ${isRecommended && styles.recommendedProduct}`}>£{parseFloat(priceNow.toFixed(2))}</p>
      <p className={styles.savingPrice}>Save £{parseFloat((originalPrice - priceNow).toFixed(2))}</p>
    </div>
  )
}

export default Prices
