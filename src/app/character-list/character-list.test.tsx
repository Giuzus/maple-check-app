import React from 'react';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CharacterList from './character-list';
import { renderWithProviders } from '../../utils/test-utils';
import { store } from '../../store/store';
import { addCharacter } from '../../store/characters/charactersSlice';

describe('<CharacterList />', () => {
  test('it should mount', () => {
    renderWithProviders(<CharacterList />);

    const characterList = screen.getByTestId('CharacterList');

    expect(characterList).toBeInTheDocument();
  });

  test('it should render a list of characters', () => {
    renderWithProviders(<CharacterList />);

    act(() => {
      store.dispatch(addCharacter({ name: 'test1' }));
      store.dispatch(addCharacter({ name: 'test1' }));
      store.dispatch(addCharacter({ name: 'test1' }));
    });
    const characterList = screen.getByTestId('CharacterList');
    const characterListItems = characterList.querySelectorAll('li');

    expect(characterListItems.length).toBe(4);
  });
});