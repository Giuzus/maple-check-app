import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import characterReducer from '../store/characters/charactersSlice';

//load persisted state
const localStorageState = localStorage.getItem('reduxState')
const preloadedState = localStorageState ? JSON.parse(localStorageState || '') : {};

export const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
  preloadedState: preloadedState
});

//Persist store to local storage
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
