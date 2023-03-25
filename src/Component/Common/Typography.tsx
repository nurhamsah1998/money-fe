import React from 'react';
import {Text, ITextProps} from 'native-base';
import {ResponsiveValue} from 'native-base/lib/typescript/components/types';
import {StyleProp, TextStyle} from 'react-native';
import {InterfaceTextProps} from 'native-base/lib/typescript/components/primitives/Text/types';

interface PROPS extends InterfaceTextProps {
  children: string | any;
  fontSize?: ResponsiveValue<
    | number
    | (string & {})
    | 'md'
    | 'sm'
    | 'lg'
    | 'xl'
    | '2xl'
    | '2xs'
    | 'xs'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
  >;
  fontWeight?: ResponsiveValue<
    | number
    | (string & {})
    | 'bold'
    | 'hairline'
    | 'thin'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'extrabold'
    | 'black'
    | 'extraBlack'
  >;
  style?: StyleProp<TextStyle>;
}

const Typography: React.FC<PROPS> = ({
  style,
  fontSize,
  fontWeight,
  children,
}) => {
  return (
    <Text
      style={style}
      fontSize={fontSize}
      fontFamily="heading"
      fontWeight={fontWeight}>
      {children}
    </Text>
  );
};

export default Typography;
