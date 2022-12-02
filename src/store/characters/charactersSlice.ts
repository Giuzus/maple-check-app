import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface Character {
  id?: string;
  name: string;
}

export interface CharactersState {
  characters: Character[];
  selectedCharacter: Character | null;
}

const initialState: CharactersState = {
  characters: [],
  selectedCharacter: null
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    addCharacter: (state, action: PayloadAction<Character>) => {
      action.payload.id = uuidv4();
      state.characters = state.characters.concat(action.payload)
    },
    removeCharacter: (state, action: PayloadAction<string>) => {
      state.characters = state.characters.filter((x) => x.id !== action.payload)
    },
    setSelectedCharacter: (state, action: PayloadAction<Character>) => {
      state.selectedCharacter = action.payload
    }
  }
});

export const { addCharacter, removeCharacter, setSelectedCharacter } = charactersSlice.actions;

export default charactersSlice.reducer;
