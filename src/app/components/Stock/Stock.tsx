import { FC } from 'react'

import styles from '@styles/components/Stock.module.scss'

import { StockComponentProps } from '@context/Shop.types'

const Stock: FC<StockComponentProps> = ({ stock, isRecommended }): JSX.Element => {
  return (
    <div>
      <p className={`${styles.stock} ${isRecommended && styles.recommendedProduct}`}>
        {stock > 50 ? 'In stock' : 'Last few left'}
      </p>
      {stock > 50 ?
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
