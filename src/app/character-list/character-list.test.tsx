import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CharacterList from './character-list';
import { renderWithProviders } from '../../utils/test-utils';

describe('<CharacterList />', () => {
  test('it should mount', () => {
    renderWithProviders(<CharacterList />);
    
    const characterList = screen.getByTestId('CharacterList');

    expect(characterList).toBeInTheDocument();
  });
});