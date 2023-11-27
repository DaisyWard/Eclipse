import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import Stock from '../components/Stock'

const mockData = {
  stock: 5,
  isRecommended: false
}

const mockDataInStock = {
  stock: 90,
  isRecommended: false
}

describe('Stock', () => {
  it('renders the stock level as low', () => {
    render(<Stock {...mockData} />)

    const lowStockbarElement = screen.getByText('Last few left')
    expect(lowStockbarElement).toBeInTheDocument()

    const lowStockbarElementID = screen.getByTestId('lowStockbar')
    expect(lowStockbarElementID).toHaveStyle(`background-image: $color-american-silver`)
  })

  it('renders the stock level as in stock', () => {
    render(<Stock {...mockDataInStock} />)

    const inStockbarElement = screen.getByText('In stock')
    expect(inStockbarElement).toBeInTheDocument()

    const inStockbarElementID = screen.getByTestId('inStockbar')
    expect(inStockbarElementID).toHaveStyle(`background-image: $color-green-crayola`)
  })
})