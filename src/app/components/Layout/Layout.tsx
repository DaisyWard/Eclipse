import { FC } from 'react'

import styles from '@styles/components/Layout.module.scss'

import { Props } from '@context/Shop.types'

const Layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.wrapper}>{children}</div>
        </div>
      </main>
    </>
  )
}

export default Layout
