import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface CharacterTask {
  complete: boolean;
}

export interface Character {
  id?: string;
  name: string;
  apiData?: any;
  tasks: { [key: string]: CharacterTask };
}

export interface CharactersState {
  characters: Character[];
  selectedCharacter: Character | null;
  accountTasks: { [key: string]: CharacterTask };
}

const initialState: CharactersState = {
  characters: [],
  selectedCharacter: null,
  accountTasks: {}
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
    },
    toggleTask: (state, action: PayloadAction<{ characterId: string | undefined, task: string }>) => {
      const { characterId, task } = action.payload;

      //if characterId is null, toggle the account task
      if (characterId === undefined) {
        if (state.accountTasks.hasOwnProperty(task) === false)
          state.accountTasks[task] = { complete: false };

        state.accountTasks[task].complete = !state.accountTasks[task].complete;
        return;
      }

      state.characters = state.characters.map((char) => {
        if (char.id !== characterId) return char;

        //if doesn't exist, create it
        if (char.tasks.hasOwnProperty(task) === false)
          char.tasks[task] = { complete: false };

        //toggle the task
        char.tasks[task].complete = !char.tasks[task].complete;

        return char;
      })
    }
  }
});

export const { addCharacter, removeCharacter, setSelectedCharacter, setCharacterApiData, toggleTask } = charactersSlice.actions;

export default charactersSlice.reducer;
