import { FC, useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import Countdown, { CountdownRenderProps, zeroPad } from 'react-countdown'
import ordinal from 'ordinal-js'

import { SlBasket } from 'react-icons/sl'
import { MdOutlineStarPurple500 } from 'react-icons/md'

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

  const priceNow = data.price - (data.price * (data.discountPercentage / 100))

  const currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  var day = currentDate.getDate()
  var month = currentDate.toLocaleString('default', { month: 'long' });
  const tomorrow = `${ordinal.toOrdinal(day)} ${month}`

  const saveDataToConsole = () => {
    console.group('Basket Data')
    console.log('Product ID', data.id)
    console.log('Product Price', priceNow)
    console.groupEnd()
  }

  return (
    <div className={`${styles.container} ${data.isRecommended && styles.recommendedProduct}`}>
      <div className={styles.wrapper}>
        <div className={styles.columnOne}>
          {data.isRecommended &&
            <p className={styles.recommended}>Eclipse recommended</p>
          }
          <Image
            src={data.images[0]}
            alt={data.description}
            className={styles.productImage}
            width='347'
            height='287'
          />
        </div>
        <div className={styles.columnTwo}>
          <h3 className={styles.title}>{data.title}</h3>
          <div className={styles.reviewWrapper}>
            {[...Array(Math.round(data.rating))].map((e, i) => <MdOutlineStarPurple500 key={i} className={styles.starIcon} /> )}
            <p className={styles.reviewText}>XX Reviews</p>
          </div>
        </div>
        <div className={styles.columnThree}>
          <Prices
            originalPrice={data.price}
            priceNow={priceNow}
            isRecommended={data.isRecommended}
          />
          <Stock
            stock={data.stock}
            isRecommended={data.isRecommended}
          />
          <ul>
            <li className={styles.orderBy}>
              <p>Order in the next
              <b> <Countdown
                date={countdownTimestamp}
                renderer={renderer}
                className={styles.countdown}
              /> </b>
              for delivery on <b>{tomorrow}</b> </p>
            </li>
            <li>
              FREE UK delivery
            </li>
            <li>
              PayPal credit available
            </li>
          </ul>

          <div>
            <button
              className={styles.addToBasketButton}
              onClick={() => saveDataToConsole()}
            >
              <SlBasket className={styles.basketIcon} />
              Add to basket
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
