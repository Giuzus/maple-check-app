import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './header';
import { BrowserRouter } from 'react-router-dom'

describe('<Header />', () => {

  let header: HTMLElement;

  beforeEach(() => {
    render(<Header />, {wrapper: BrowserRouter});
    header = screen.getByTestId('Header');
  })

  test('it should mount', () => {
    expect(header).toBeInTheDocument();
  });
  
  test('should have a characters link', async () => {
    const link = await screen.findByText("Characters")
    expect(link).toContainHTML(`href="/"`)
  });

  test('should have a checklists link', async () => {
    const link = await screen.findByText("Checklists")
    expect(link).toContainHTML(`href="/checklists"`)
  });

});