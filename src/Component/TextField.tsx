import React from 'react';
import {Input, FormControl} from 'native-base';
import {IInputComponentType} from 'native-base/lib/typescript/components/composites/Tag/types';

interface NURHAMSAH extends IInputComponentType {
  label?: string;
}

const TextField: NURHAMSAH = () => {
  return (
    <FormControl>
      <FormControl.Label></FormControl.Label>
      <Input
        isInvalid
        placeholder={'placeholder'}
        _focus={{backgroundColor: 'gray.100', borderColor: 'primary.500'}}
      />
    </FormControl>
  );
};

export default TextField;
