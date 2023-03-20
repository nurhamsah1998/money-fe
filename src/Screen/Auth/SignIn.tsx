import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signIn} from '../../Store/Reducer/UserAuthReducer';

function SignIn() {
  const dispatch = useDispatch();
  return (
    <View>
      <Button
        title="Login"
        onPress={async () => {
          await AsyncStorage.setItem('@user_access_token', 'ppppp');
          dispatch(signIn());
        }}
      />
      <Text>SignIn</Text>
    </View>
  );
}

export default SignIn;
