import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  isAuth: false,
};

export const AuthReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: props => {
      props.isAuth = true;
      props.isLoading = false;
    },
    register: props => {
      props.isAuth = true;
      props.isLoading = false;
    },
    logOut: props => {
      props.isAuth = false;
      props.isLoading = false;
    },
  },
});

export const {login, register, logOut} = AuthReducer.actions;

export default AuthReducer.reducer;
