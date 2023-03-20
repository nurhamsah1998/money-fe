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
import SignIn from './SignIn';

function AuthNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: true, animation: 'none'}}>
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </>
  );
}

export default AuthNavigator;
