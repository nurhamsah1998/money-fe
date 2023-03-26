import React from 'react';
import {Dimensions} from 'react-native';
import {Box, IconButton} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

function BackgroundHeader({navigation}: {navigation?: any}) {
  const windowHeight = Dimensions.get('window').height;
  return (
    <Box
      height={windowHeight / 2.8}
      position="relative"
      bgColor="primary.500"
      overflow="hidden"
      borderBottomRadius="3xl"
      p={4}>
      <Box>
        <IconButton
          onPress={() => navigation.toggleDrawer()}
          alignSelf="flex-start"
          borderRadius="full"
          icon={<Ionicons name="menu-sharp" size={30} color="white" />}
        />
      </Box>
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
