import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import ShopContextProvider from './context/Shop.state'

import Layout from './components/Layout'

import '@styles/global/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:'Eclipse',
  keywords:'Next.js, shop, products',
  description:'A shop for you to get the latest deals'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ShopContextProvider>
          <Layout>
            {children}
          </Layout>
        </ShopContextProvider>
      </body>
    </html>
  )
}
