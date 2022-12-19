import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CharactersPage from './characters-page';
import { renderWithProviders } from '../../utils/test-utils';

describe('<CharactersPage />', () => {
  test('it should mount', () => {
    renderWithProviders(<CharactersPage />);

    const charactersPage = screen.getByTestId('charactersPage');

    expect(charactersPage).toBeInTheDocument();
  });
});