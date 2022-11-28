import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Topbar from './topbar';

describe('<Topbar />', () => {
  beforeEach(() => {
    render(<Topbar />);
  });

  test('it should mount', () => {
    const topbar = screen.getByTestId('Topbar');

    expect(topbar).toBeInTheDocument();
  });
  test('should have a news link', async () => {
    const link = await screen.findByTestId('news')
    expect(link).toHaveAttribute("href", "https://maplestory.nexon.net/news")
  });

  test('should have a contact link', async () => {
    const link = await screen.findByTestId('contact')
    expect(link).toHaveAttribute("href", "https://github.com/Giuzus/maple-check-app")
  });
});