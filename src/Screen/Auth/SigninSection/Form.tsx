import React from 'react';
import {Box, Button, Icon, Pressable} from 'native-base';
import TextField from 'Component/TextField';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from 'src/Theme/theme';
import {VALUE} from './SignIn';

function Form({
  values,
  handleChange,
  formRef,
}: {
  values: VALUE;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T,
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  formRef: any;
}) {
  const [show, setShow] = React.useState<boolean>(false);
  return (
    <Box>
      <Box>
        <TextField
          label="Username"
          placeholder="enter username here"
          onChangeText={handleChange('userName')}
          value={values.userName}
          InputLeftElement={
            <Ionicons
              name="person"
              size={20}
              color={theme.colors.primary[500]}
              style={{marginLeft: 10}}
            />
          }
          variant="rounded"
          id="userName"
        />
      </Box>
      <Box mt={1}>
        <TextField
          InputLeftElement={
            <Ionicons
              name="lock-closed"
              size={20}
              style={{marginLeft: 10}}
              color={theme.colors.primary[500]}
            />
          }
          variant="rounded"
          id="password"
          placeholder="enter password here"
          value={values.password}
          onChangeText={handleChange('password')}
          m={5}
          label="Password"
          type={show ? 'text' : 'password'}
          InputRightElement={
            <Pressable bgColor="red" onPress={() => setShow(!show)}>
              <Icon
                as={<Ionicons name={show ? 'ios-eye' : 'ios-eye-off'} />}
                size={5}
                mr="5"
                color="muted.400"
              />
            </Pressable>
          }
        />
      </Box>
      <Button
        // colorScheme={theme.colors.primary[500]}
        mt={10}
        onPress={() => formRef.current?.handleSubmit()}>
        Sign in
      </Button>
    </Box>
  );
}

export default Form;
