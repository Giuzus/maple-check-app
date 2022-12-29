import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import characterReducer from '../store/characters/charactersSlice';

//load persisted state
const localStorageKey = 'reduxState-v2';
const localStorageState = localStorage.getItem(localStorageKey)
const preloadedState = localStorageState ? JSON.parse(localStorageState || '') : {};

export const store = configureStore({
  reducer: {
    charactersState: characterReducer,
  },
  preloadedState: preloadedState
});

//Persist store to local storage
store.subscribe(() => {
  localStorage.setItem(localStorageKey, JSON.stringify(store.getState()));
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
