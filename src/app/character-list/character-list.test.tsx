import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CharacterList from './character-list';

describe('<CharacterList />', () => {
  test('it should mount', () => {
    render(<CharacterList />);
    
    const characterList = screen.getByTestId('CharacterList');

    expect(characterList).toBeInTheDocument();
  });
});