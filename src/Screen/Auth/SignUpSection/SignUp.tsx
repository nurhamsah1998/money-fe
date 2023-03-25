import React from 'react';
import {useDispatch} from 'react-redux';
import Typography from 'Component/Typography';
import {Formik} from 'formik';
import {Box, Button, Center, ScrollView} from 'native-base';
import Logo from 'Assets/Brand/inline_logo.svg';
import Form from './Form';

export interface VALUE {
  name: string;
  email: string;
  password: string;
}
const initialValues: VALUE = {
  name: '',
  email: '',
  password: '',
};

function SignUp({navigation}: {navigation: any}) {
  const dispatch = useDispatch();
  const formRef: React.MutableRefObject<null> | any = React.useRef(null);
  return (
    <ScrollView style={{flex: 1}}>
      <Box px={5}>
        <Center mt={-10}>
          <Logo width={200} />
        </Center>
        <Typography style={{textAlign: 'center'}} fontSize="2xl">
          Sign Up
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
            Already have account ?
          </Typography>
          <Button
            mt={3}
            size="lg"
            onPress={() => navigation.goBack()}
            colorScheme="success">
            Sign In
          </Button>
        </Box>
      </Box>
    </ScrollView>
  );
}

export default SignUp;
