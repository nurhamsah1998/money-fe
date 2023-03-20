import {createSlice, SliceCaseReducers} from '@reduxjs/toolkit';

interface INITIAL_VALUE {
  isAuth: boolean;
  isLoading: boolean;
}
const initialState: INITIAL_VALUE = {
  isAuth: false,
  isLoading: true,
};

const Auth: any = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (auth: any) => {
      auth.isAuth = true;
      auth.isLoading = false;
    },
    signUp: (auth: any) => {
      auth.isAuth = true;
      auth.isLoading = false;
    },
    signOut: (auth: any) => {
      auth.isAuth = false;
      auth.isLoading = false;
    },
  },
});
export const {signIn, signUp, signOut} = Auth.actions;

export default Auth.reducer;
