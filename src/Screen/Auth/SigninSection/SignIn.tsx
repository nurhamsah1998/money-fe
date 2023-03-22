import React from 'react';
import {useDispatch} from 'react-redux';
import Typography from 'Component/Typography';
import {FieldInputProps, Formik, FormikProps, Form} from 'formik';
import KeyboardDismiss from 'Component/KeyboardDismiss';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signIn} from '../../../Store/Reducer/UserAuthReducer';
import {Box, Button, Center, Input} from 'native-base';
import Logo from 'Assets/Brand/inline_logo.svg';
import TextField from 'Component/TextField';

interface VALUE {
  username: string;
  password: string;
}
const initialValues: VALUE = {
  username: '',
  password: '',
};

function SignIn() {
  const dispatch = useDispatch();
  const formRef: React.MutableRefObject<null> | any = React.useRef(null);
  return (
    <KeyboardDismiss>
      <Box px={5} flex={1}>
        <Center>
          <Logo width={200} />
        </Center>
        <Typography style={{textAlign: 'center'}} fontSize="2xl">
          Login
        </Typography>
        <Formik
          innerRef={formRef}
          initialValues={initialValues}
          onSubmit={value => {
            console.log(formRef.current);
          }}>
          {({getFieldProps}) => (
            <Box>
              <TextField label="Username" />
              <TextField label="Password" type="password" />
              <Button onPress={() => formRef.current?.handleSubmit()}>
                sd
              </Button>
            </Box>
          )}
        </Formik>
      </Box>
    </KeyboardDismiss>
  );
}

export default SignIn;
