import { FC } from 'react'
import Image from 'next/image'

import styles from '@styles/components/Product.module.scss'

import { ProductProps } from '@context/Shop.types'

const Product: FC<ProductProps> = ({ data }): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.columnOne}>
          <Image
            src={data.images[0]}
            alt=''
            className={styles.productImage}
            width='347'
            height='287'
          />
        </div>
        <div className={styles.columnTwo}>
          <h3 className={styles.title}>{data.title}</h3>
          <p>{data.rating}</p>

        </div>
        <div className={styles.columnThree}>
          {data.discountPercentage}
          {data.price}
          {data.stock}

        </div>
      </div>
    </div>
  )
}

export default Product
