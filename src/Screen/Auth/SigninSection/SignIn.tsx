import React from 'react';
import {useDispatch} from 'react-redux';
import Typography from 'Component/Typography';
import {FieldInputProps, Formik, FormikProps, Form} from 'formik';
import KeyboardDismiss from 'Component/KeyboardDismiss';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signIn} from '../../../Store/Reducer/UserAuthReducer';
import {Box, Button, Center, Input} from 'native-base';
import Logo from 'Assets/Brand/inline_logo.svg';
import GoogleIcon from 'Assets/google-icon.svg';
import TextField from 'Component/TextField';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface VALUE {
  userName: string;
  password: string;
}
const initialValues: VALUE = {
  userName: '',
  password: '',
};

function SignIn() {
  const dispatch = useDispatch();
  const formRef: React.MutableRefObject<null> | any = React.useRef(null);
  return (
    <KeyboardDismiss>
      <Box px={5} flex={1}>
        <Center mt={-10}>
          <Logo width={200} />
        </Center>
        <Typography style={{textAlign: 'center'}} fontSize="2xl">
          Login
        </Typography>
        <Formik
          innerRef={formRef}
          initialValues={initialValues}
          onSubmit={values => {
            console.log(values);
          }}>
          {({values, handleChange}) => (
            <Box>
              <Box>
                <TextField
                  label="Username"
                  onSubmitEditing={() => formRef.current?.handleSubmit()}
                  onChangeText={handleChange('userName')}
                  value={values.userName}
                  id="userName"
                />
              </Box>
              <Box mt={5}>
                <TextField
                  id="password"
                  value={values.password}
                  onSubmitEditing={() => formRef.current?.handleSubmit()}
                  onChangeText={handleChange('password')}
                  m={5}
                  label="Password"
                  type="password"
                />
              </Box>
              <Button mt={10} onPress={() => formRef.current?.handleSubmit()}>
                Login
              </Button>
            </Box>
          )}
        </Formik>
        <Box mt={5}>
          <Typography style={{textAlign: 'center'}} fontSize="sm">
            Doesnt have account ? Dont worry we got you
          </Typography>
          <Button mt={3} colorScheme="success">
            Register
          </Button>
          <Button
            variant="outline"
            borderColor="primary.500"
            mt={3}
            leftIcon={<AntDesign name="google" color="gray" />}>
            Continue with Google
          </Button>
        </Box>
      </Box>
    </KeyboardDismiss>
  );
}

export default SignIn;
