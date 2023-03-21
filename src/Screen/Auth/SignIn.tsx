import React from 'react';
import {useDispatch} from 'react-redux';
import Typography from 'Component/Typography';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signIn} from '../../Store/Reducer/UserAuthReducer';
import {Box, Center, Input} from 'native-base';
import Logo from '../../Assets/Brand/inline_logo.svg';
import KeyboardDismiss from 'Component/KeyboardDismiss';
import TextField from 'Component/TextField';

function SignIn() {
  const dispatch = useDispatch();
  return (
    <KeyboardDismiss>
      <Box p={2} flex={1}>
        <Center>
          <Logo width={200} />
        </Center>
        <Typography style={{textAlign: 'center'}} fontSize="2xl">
          Login
        </Typography>
        {/* <Box>
          <TextField />
        </Box> */}
      </Box>
    </KeyboardDismiss>
  );
}

export default SignIn;
