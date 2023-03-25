import React from 'react';
import {Input, FormControl} from 'native-base';
import {ResponsiveValue} from 'native-base/lib/typescript/components/types';
import {ITagProps} from 'native-base/lib/typescript/components/composites/Tag/types';
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

interface VARIANT {
  variant?: ResponsiveValue<
    'outline' | 'rounded' | (string & {}) | 'underlined' | 'filled' | 'unstyled'
  >;
}

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
  variant?: VARIANT | any;
  InputLeftElement?: JSX.Element;
  InputRightElement?: JSX.Element;
}

const TextField: React.FC<PROPS> = ({
  label,
  isInvalid,
  placeholder,
  onChangeText,
  value,
  type,
  variant,
  defaultValue,
  onSubmitEditing,
  display,
  InputLeftElement,
  InputRightElement,
}) => {
  return (
    <FormControl>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        onChangeText={onChangeText}
        isInvalid={isInvalid}
        placeholder={placeholder}
        value={value}
        InputLeftElement={InputLeftElement}
        InputRightElement={InputRightElement}
        variant={variant}
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
