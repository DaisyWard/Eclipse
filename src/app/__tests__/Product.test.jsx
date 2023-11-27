import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import Product from '../components/Product'
import ShopContext from '@context/Shop.context'
import { singleMockData } from '../mocks/singleMockData'

describe('Product', () => {
  it('renders the product title', () => {
    render(
      <ShopContext.Provider value={{ productData: singleMockData }}>
        <Product data={singleMockData[0]} />
      </ShopContext.Provider>
    )

    const productName = screen.getByText('iPhone 9')

    expect(productName).toBeInTheDocument()
  })

  it('renders the product image', () => {
    render(
      <ShopContext.Provider value={{ productData: singleMockData }}>
        <Product data={singleMockData[0]} />
      </ShopContext.Provider>
    )

    const productImage = screen.getByAltText(/An apple mobile which is nothing like apple/i)

    expect(productImage).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Fi.dummyjson.com%2Fdata%2Fproducts%2F1%2F1.jpg&w=750&q=75'
    )
  })
})