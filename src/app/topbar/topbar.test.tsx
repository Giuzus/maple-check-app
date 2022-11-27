import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Topbar from './topbar';

describe('<Topbar />', () => {
  test('it should mount', () => {
    render(<Topbar />);
    
    const topbar = screen.getByTestId('Topbar');

    expect(topbar).toBeInTheDocument();

    test('should have a news link', async () => {
      const link = await screen.findByText("News")
      expect(link).toContainHTML(`href="https://maplestory.nexon.net/news"`)
    });

    test('should have a contact link', async () => {
      const link = await screen.findByText("Contact")
      expect(link).toContainHTML(`href="https://github.com/Giuzus/maple-check-app"'`)
    });
    
  });
});