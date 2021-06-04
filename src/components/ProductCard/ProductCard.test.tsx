import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from './index';

const Product = {
    "id": 11,
    "name": "10 Lives",
    "description": "10 Lives product bundle.",
    "price": 1,
    "currencyCode": "USD",
    "currencySymbol": "$",
    "quantity": 10,
    "imageLocation": "https://dev-images-carry1st-products.s3.eu-west-2.amazonaws.com/74e517a3-0615-4019-bb08-cc697cf4e747.png",
    "status": "ACTIVE"
  }

test('Renders product card properly', () => {
  render(<ProductCard data={Product}  />);
  const price = screen.getByText(/\$1/i);
  const name = screen.getByText(/10 Lives/i);
  expect(price).toBeInTheDocument();
  expect(name).toBeInTheDocument();
});