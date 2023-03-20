import {configureStore} from '@reduxjs/toolkit';
import {ToolkitStore} from '@reduxjs/toolkit/dist/configureStore';
import UserAuthReducer from './Reducer/UserAuthReducer';

export const store: ToolkitStore = configureStore({
  reducer: {
    auth: UserAuthReducer,
  },
});
