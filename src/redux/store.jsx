import { configureStore } from '@reduxjs/toolkit';
import araclarSlice from './araclarSlice';

export const store = configureStore({
  reducer: {
    araclar: araclarSlice,
  },
});
