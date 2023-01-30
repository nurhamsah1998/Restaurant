import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  sheetRef: false,
};

export const BottomSheetReducer = createSlice({
  name: 'bottomSheet',
  initialState,
  reducers: {
    open: props => {
      props.sheetRef = true;
    },
    close: props => {
      props.sheetRef = false;
    },
  },
});

export const {open, close} = BottomSheetReducer.actions;

export default BottomSheetReducer.reducer;
