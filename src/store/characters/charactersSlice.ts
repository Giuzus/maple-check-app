import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface Character {
  id?: string;
  name: string;
  apiData?: any;
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
      state.characters = state.characters.filter((char) => char.id !== action.payload)
    },
    setCharacterApiData: (state, action: PayloadAction<{ id: string, data: any }>) => {
      state.characters = state.characters.map((char) => char.id === action.payload.id ? { ...char, apiData: action.payload.data } : char)
    },
    setSelectedCharacter: (state, action: PayloadAction<Character | null>) => {
      state.selectedCharacter = action.payload
    }
  }
});

export const { addCharacter, removeCharacter, setSelectedCharacter, setCharacterApiData } = charactersSlice.actions;

export default charactersSlice.reducer;
