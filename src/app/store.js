import { configureStore } from '@reduxjs/toolkit';
import composeMailReducer from '../features/composeMailSlice';

export const store = configureStore({
  reducer: {
    composeMail: composeMailReducer,
  },
});
