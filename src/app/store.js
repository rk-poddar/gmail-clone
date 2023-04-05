import { configureStore } from '@reduxjs/toolkit';
import composeMailReducer from '../features/composeMailSlice';
import userReducer from '../features/userSlice'

export const store = configureStore({
  reducer: {
    composeMail: composeMailReducer,
    user: userReducer,
  },
});
