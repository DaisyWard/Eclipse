import { FC } from 'react'

import styles from '@styles/components/Stock.module.scss'

import { StockComponentProps } from '@context/Shop.types'

import { lowStockThreshold } from '../../utils/constants'

const Stock: FC<StockComponentProps> = ({ stock, isRecommended }): JSX.Element => {
  return (
    <div>
      <p className={`${styles.stock} ${isRecommended && styles.recommendedProduct}`}>
        {stock > lowStockThreshold ? 'In stock' : 'Last few left'}
      </p>
      {stock > lowStockThreshold ?
        <div className={styles.inStock}></div>
      :
        <>
          <div className={styles.lowStockbar}></div>
          <div className={styles.lowStock}></div>
        </>
      }
    </div>
  )
}

export default Stock
