import React from 'react';
import {Input, FormControl} from 'native-base';
import {IInputComponentType} from 'native-base/lib/typescript/components/composites/Tag/types';

function TextField({
  placeholder,
  label,
  ...props
}: {
  placeholder?: string | undefined;
  label?: string;
  props?: IInputComponentType;
}) {
  return (
    <FormControl>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        isInvalid
        placeholder={placeholder}
        _focus={{backgroundColor: 'gray.100', borderColor: 'primary.500'}}
        {...props}
      />
    </FormControl>
  );
}

export default TextField;
