import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from './AuthReducer';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
