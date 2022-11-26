import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorPage from './error-page';
import { BrowserRouter } from "react-router-dom"

describe('<ErrorPage />', () => {
  test('it should mount', () => {
    render(<ErrorPage />, { wrapper: BrowserRouter });

    const errorPage = screen.getByTestId('ErrorPage');

    expect(errorPage).toBeInTheDocument();
  });
});