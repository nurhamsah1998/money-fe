import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import WhiteScreen from './WhiteScreen';

function KeyboardDismiss({children}: {children: any}) {
  return (
    <WhiteScreen>
      <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
    </WhiteScreen>
  );
}

export default KeyboardDismiss;
