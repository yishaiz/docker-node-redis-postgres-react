import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  const linkElement = getByText(/Welcome to my Fib application/i);
  expect(linkElement).toBeInTheDocument();
});
  