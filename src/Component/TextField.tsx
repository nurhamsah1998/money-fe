import React from 'react';
import {Input, FormControl} from 'native-base';
import {ITagProps} from 'native-base/lib/typescript/components/composites/Tag/types';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

interface PROPS extends ITagProps {
  label?: string;
  onChange?:
    | ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
    | undefined;
  value?: string | undefined;
  type?: 'text' | 'password' | undefined;
  defaultValue?: string | undefined;
  placeholder?: string | undefined;
  isDisabled?: boolean | undefined;
  isInvalid?: boolean | undefined;
}

const TextField: React.FC<PROPS> = ({
  label,
  isInvalid,
  placeholder,
  onChange,
  value,
  type,
  defaultValue,
  display,
}) => {
  return (
    <FormControl>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        isInvalid={isInvalid}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onSubmitEditing={e => console.log(e)}
        defaultValue={defaultValue}
        display={display}
        type={type}
        _focus={{backgroundColor: 'gray.100', borderColor: 'primary.500'}}
      />
    </FormControl>
  );
};

export default TextField;
