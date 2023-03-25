import React from 'react';
import {useDispatch} from 'react-redux';
import Typography from 'Component/Common/Typography';
import {Formik} from 'formik';
import {Box, Button, Center, ScrollView} from 'native-base';
import Logo from 'Assets/Brand/inline_logo.svg';
import GoogleIcon from 'Assets/google-icon.svg';
import {KeyboardAvoidingView, Platform} from 'react-native';
import Form from './Form';

export interface VALUE {
  userName: string;
  password: string;
}
const initialValues: VALUE = {
  userName: '',
  password: '',
};

function SignIn({navigation}: {navigation: any}) {
  const dispatch = useDispatch();
  const formRef: React.MutableRefObject<null> | any = React.useRef(null);
  return (
    <ScrollView>
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> */}
      <Box px={5}>
        <Center mt={-10}>
          <Logo width={200} />
        </Center>
        <Typography style={{textAlign: 'center'}} fontSize="2xl">
          Sign In
        </Typography>
        <Formik
          innerRef={formRef}
          initialValues={initialValues}
          onSubmit={values => {
            console.log(values);
          }}>
          {({values, handleChange}) => (
            <Form
              values={values}
              formRef={formRef}
              handleChange={handleChange}
            />
          )}
        </Formik>
        <Box mt={5}>
          <Typography style={{textAlign: 'center'}} fontSize="sm">
            Doesnt have account ? Dont worry we got you
          </Typography>
          <Button
            mt={3}
            onPress={() => navigation.navigate('SignUp')}
            colorScheme="success"
            size="lg">
            Sign Up
          </Button>
          <Button
            variant="outline"
            borderColor="primary.500"
            mt={3}
            size="lg"
            leftIcon={<GoogleIcon width={20} height={20} />}>
            Continue with Google
          </Button>
        </Box>
      </Box>
      {/* </KeyboardAvoidingView> */}
    </ScrollView>
  );
}

export default SignIn;
