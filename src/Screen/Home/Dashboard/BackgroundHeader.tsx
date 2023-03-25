import React from 'react';
import {Dimensions} from 'react-native';
import {Box} from 'native-base';
import {StyleSheet} from 'react-native';

function BackgroundHeader() {
  const windowHeight = Dimensions.get('window').height;
  return (
    <Box
      height={windowHeight / 2.8}
      position="relative"
      bgColor="primary.500"
      overflow="hidden">
      <Box
        height={220}
        width={220}
        borderRadius="full"
        position="absolute"
        top="-20%"
        right="-20%"
        bgColor="primary.400"
      />
      <Box
        height={150}
        width={150}
        borderRadius="full"
        position="absolute"
        left="-20%"
        bottom="-20%"
        bgColor="primary.400"
      />
    </Box>
  );
}
export default BackgroundHeader;
