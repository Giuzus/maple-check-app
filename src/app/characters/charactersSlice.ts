import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export enum MaplestoryServer {
  Reboot,
  Bera,
  Scania,
  Aurora
}

export interface Character {
  id?: string;
  name: string;
  server: MaplestoryServer
}

export interface CharactersState {
  characters: Character[]
}

const initialState: CharactersState = {
  characters: []
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
    }
  }
});

export const { addCharacter, removeCharacter } = charactersSlice.actions;

export default charactersSlice.reducer;
