import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateCharacterModal from './create-character-modal';
import { renderWithProviders } from '../../utils/test-utils';
import { store } from '../../store/store';

describe('<CreateCharacterModal />', () => {
  test('it should mount', () => {
    render(<CreateCharacterModal show={true} close={() => (null)} />);

    const createCharacterModal = screen.getByTestId('CreateCharacterModal');

    expect(createCharacterModal).toBeInTheDocument();
  });

  //TODO: LEARN TO TEST THINGS IN REACT
  // test('should create new characters', () => {

  //   const handleClose = jest.fn();

  //   const component = renderWithProviders(<CreateCharacterModal show={true} close={handleClose} />);

  //   //get name input
  //   const nameInput: HTMLInputElement = screen.getByTestId('nameInput');

  //   //set name
  //   fireEvent.change(nameInput, { target: { value: 'Test character' } });

  //   //save
  //   const wrapper = shallow
  //   await component.rerender.

  //   //expect handleClose to be called
  //   expect(handleClose).toHaveBeenCalled();

  //   //check if character was added to store
  //   const character = store.getState().charactersState.characters.find(c => c.name === "Test character");
  //   expect(character).not.toBeUndefined();
  // });
});