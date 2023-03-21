import React from 'react';
import {Box} from 'native-base';

function WhiteScreen({children}: {children: any}) {
  return (
    <Box bgColor="white" flex={1}>
      {children}
    </Box>
  );
}

export default WhiteScreen;
