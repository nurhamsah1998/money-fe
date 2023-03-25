import * as React from 'react';
import {Center, Spinner} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {signIn, signOut} from './src/Store/Reducer/UserAuthReducer';
import HomeNavigator from './src/Screen/Home/HomeNavigator';
import AuthNavigator from './src/Screen/Auth/AuthNavigator';

function Router() {
  const isUserAuth = useSelector((props: any) => props.auth);
  const dispatch = useDispatch();
  const getUserToken: () => Promise<void> = async () => {
    try {
      const value = await AsyncStorage.getItem('@user_access_token');
      if (value !== null) {
        dispatch(signIn());
      } else {
        dispatch(signOut());
      }
    } catch (e) {
      // error reading value
    }
  };
  React.useEffect(() => {
    getUserToken();
  }, []);
  if (isUserAuth.isLoading) {
    return (
      <Center flex={1}>
        <Spinner size="lg" />
      </Center>
    );
  }
  return !isUserAuth.isAuth ? <HomeNavigator /> : <AuthNavigator />;
}

export default Router;
