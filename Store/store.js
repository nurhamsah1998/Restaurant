import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from './AuthReducer';
import BottomSheetReducer from './BottomSheetReducer';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    bottomSheet: BottomSheetReducer,
  },
});
