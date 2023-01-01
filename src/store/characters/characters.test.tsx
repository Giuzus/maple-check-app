import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import charactersReducer, {
  addCharacter,
  CharactersState,
  removeCharacter,
  toggleTask
} from './charactersSlice';

describe('Characters store', () => {
  const initialState: CharactersState = {
    characters: [],
    selectedCharacter: undefined,
    accountTasks: {}
  };
  it('should handle initial state', () => {
    expect(charactersReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should add a new character', () => {
    const actual = charactersReducer(initialState, addCharacter({
      name: "Test char",
      tasks: {}
    }));

    expect(actual.characters.length).toEqual(1);
    expect(actual.characters[0].name).toEqual("Test char")
  });

  it('should remove a character', () => {
    let actual = charactersReducer(initialState, addCharacter({
      name: "Test char",
      tasks: {}
    }));

    expect(actual.characters.length).toEqual(1);

    const char_id = actual.characters[0].id
    actual = charactersReducer(actual, removeCharacter(char_id!!));

    expect(actual.characters.length).toEqual(0);
  });

  it('should toggle a task state', () => {

    //Arrange
    let actual = charactersReducer(initialState, addCharacter({
      name: "Test char",
      tasks: {}
    }));
    const char_id = actual.characters[0].id

    //Act
    actual = charactersReducer(actual, toggleTask({ characterId: char_id!!, task: "Test task" }));

    //Assert
    expect(actual.characters[0].tasks["Test task"].complete).toEqual(true);
  });
});


