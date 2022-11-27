import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import charactersReducer, {
  addCharacter,
  CharactersState,
  removeCharacter
} from './charactersSlice';

describe('Characters store', () => {
  const initialState: CharactersState = {
    characters: []
  };
  it('should handle initial state', () => {
    expect(charactersReducer(undefined, { type: 'unknown' })).toEqual({
      characters: [],
    });
  });

  it('should add a new character', () => {
    const actual = charactersReducer(initialState, addCharacter({
      name: "Test char",
    }));
    
    expect(actual.characters.length).toEqual(1);
    expect(actual.characters[0].name).toEqual("Test char")
  });

  it('should remove a character', () => {
    let actual = charactersReducer(initialState, addCharacter({
      name: "Test char"
    }));
    
    expect(actual.characters.length).toEqual(1);
    
    const char_id = actual.characters[0].id
    actual = charactersReducer(actual, removeCharacter(char_id!!));
    
    expect(actual.characters.length).toEqual(0);
  });
});


