import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import Home from '../page'
import ShopContext from '@context/Shop.context'
import { multipleMockData } from '../mocks/multipleMockData'

describe('Home', () => {
  it('renders the products', () => {
    render(
      <ShopContext.Provider value={{ productData: multipleMockData }}>
        <Home data={multipleMockData} />
      </ShopContext.Provider>
    )

    const productName1 = screen.getByText('iPhone 9')
    expect(productName1).toBeInTheDocument()

    const productName2 = screen.getByText('iPhone X')
    expect(productName2).toBeInTheDocument()
  })

  it('renders the error message', () => {
    render(
      <ShopContext.Provider value={{ productData: [], errorMessage: 'Sorry, something went wrong' }}>
        <Home data={[]} />
      </ShopContext.Provider>
    )

    const error = screen.getByText('Sorry, something went wrong')
    expect(error).toBeInTheDocument()
  })
})