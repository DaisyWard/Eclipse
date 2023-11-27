import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Product from '../components/Product';
import ShopContext from '@context/Shop.context';

const mockProductData = [
  {
    "id":1,
    "title":"iPhone 9",
    "description":"An apple mobile which is nothing like apple",
    "price":549,
    "discountPercentage":12.96,
    "rating":4.69,
    "stock":94,
    "brand":"Apple",
    "category":"smartphones",
    "thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images":[
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
  },
  {
    "id":2,
    "title":"iPhone X",
    "description":"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price":899,
    "discountPercentage":17.94,
    "rating":4.44,
    "stock":34,
    "brand":"Apple",
    "category":"smartphones",
    "thumbnail":"https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    "images":[
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    ]
  },
];

describe('Product', () => {
  it('renders the product title', () => {
    render(
      <ShopContext.Provider value={{ productData: mockProductData }}>
        <Product data={mockProductData[0]} />
      </ShopContext.Provider>
    );

    const productName = screen.getByText('iPhone 9')

    expect(productName).toBeInTheDocument()
  })

  it('renders the product image', () => {
    render(
      <ShopContext.Provider value={{ productData: mockProductData }}>
        <Product data={mockProductData[0]} />
      </ShopContext.Provider>
    );

    const productImage = screen.getByAltText(/An apple mobile which is nothing like apple/i)

    expect(productImage).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Fi.dummyjson.com%2Fdata%2Fproducts%2F1%2F1.jpg&w=750&q=75'
    )
  })
})