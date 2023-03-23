import * as React from 'react';
import {
  ParamListBase,
  TypedNavigator,
  StackNavigationState,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap,
} from '@react-navigation/native-stack';
import {NativeStackNavigatorProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import SignIn from './SigninSection/SignIn';
import SignUp from './SignUpSection/SignUp';

function AuthNavigator() {
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
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </>
  );
}

export default AuthNavigator;
