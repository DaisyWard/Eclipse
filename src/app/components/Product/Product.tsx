import { FC, useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import Countdown, { CountdownRenderProps, zeroPad } from 'react-countdown'

import styles from '@styles/components/Product.module.scss'

import { ProductComponentProps } from '@context/Shop.types'
import ShopContext from '@/app/context/Shop.context'
import Stock from '../Stock'
import Prices from '../Prices'

const Product: FC<ProductComponentProps> = ({ data }): JSX.Element => {
  const { setDataIsStale } = useContext(ShopContext)

  const [countdownHasFinished, setCountdownHasFinished] = useState(false)
  const [countdownTimestamp, setCountdownTimestamp] = useState(localStorage.getItem('timeLeft') ? Number(localStorage.getItem('timeLeft')) : Date.now() + 180000)

  useEffect(() => {
    localStorage.setItem('timeLeft', countdownTimestamp.toString())
  }, [])

  const renderer = ({ hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (!countdownHasFinished && completed) {
      localStorage.removeItem('timeLeft')
      setCountdownHasFinished(true)
      setDataIsStale(true)
    }
    return <p>{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</p>
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.columnOne}>
          <Image
            src={data.images[0]}
            alt={data.description}
            className={styles.productImage}
            width='347'
            height='287'
          />
          <Countdown
            date={countdownTimestamp}
            renderer={renderer}
          />
        </div>
        <div className={styles.columnTwo}>
          <h3 className={styles.title}>{data.title}</h3>
          <p>{data.rating}</p>

        </div>
        <div className={styles.columnThree}>
          <Prices
            price={data.price}
            discount={data.discountPercentage}
          />
          <Stock
            stock={data.stock}
          />
        </div>
      </div>
    </div>
  )
}

export default Product
