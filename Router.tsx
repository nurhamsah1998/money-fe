import * as React from 'react';
import {
  NavigationContainer,
  ParamListBase,
  TypedNavigator,
  StackNavigationState,
  TabNavigationState,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap,
} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NativeStackNavigatorProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {useSelector, useDispatch} from 'react-redux';
import {signIn, signOut} from './src/Store/Reducer/UserAuthReducer';
import HomeNavigator from './src/Screen/Home/HomeNavigator';
import AuthNavigator from './src/Screen/Auth/AuthNavigator';
import {View} from 'react-native';
import {Text} from 'react-native';

const Stack: TypedNavigator<
  ParamListBase,
  StackNavigationState<ParamListBase>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap,
  ({
    id,
    initialRouteName,
    children,
    screenListeners,
    screenOptions,
    ...rest
  }: NativeStackNavigatorProps) => JSX.Element
> = createNativeStackNavigator();
const Tab: TypedNavigator<
  ParamListBase,
  TabNavigationState<ParamListBase>,
  BottomTabNavigationOptions,
  BottomTabNavigationEventMap,
  () => JSX.Element
> = createBottomTabNavigator();

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
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return isUserAuth.isAuth ? <HomeNavigator /> : <AuthNavigator />;
}

export default Router;
