import React from 'react';
import {Input, FormControl} from 'native-base';
import {ITagProps} from 'native-base/lib/typescript/components/composites/Tag/types';
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

interface PROPS extends ITagProps {
  label?: string;
  onChangeText?: ((text: string) => void) | undefined;
  value?: string | undefined;
  type?: 'text' | 'password' | undefined;
  defaultValue?: string | undefined;
  placeholder?: string | undefined;
  isDisabled?: boolean | undefined;
  isInvalid?: boolean | undefined;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
}

const TextField: React.FC<PROPS> = ({
  label,
  isInvalid,
  placeholder,
  onChangeText,
  value,
  type,
  defaultValue,
  onSubmitEditing,
  display,
}) => {
  return (
    <FormControl>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        onChangeText={onChangeText}
        isInvalid={isInvalid}
        placeholder={placeholder}
        value={value}
        onSubmitEditing={onSubmitEditing}
        defaultValue={defaultValue}
        display={display}
        type={type}
        _focus={{backgroundColor: 'gray.100', borderColor: 'primary.500'}}
      />
    </FormControl>
  );
};

export default TextField;
