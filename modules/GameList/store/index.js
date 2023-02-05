import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { gameSlice } from './slices/gameSlice';
import { platformSlice } from './slices/platformSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      [gameSlice.name]: gameSlice.reducer,
      [platformSlice.name]: platformSlice.reducer
    },
    devTools: true
  });

export const wrapper = createWrapper(makeStore);