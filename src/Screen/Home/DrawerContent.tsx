import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Box, Avatar, Button} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
import Typography from 'Component/Common/Typography';
import {theme} from 'src/Theme/theme';

const DrawerContent = (props: any) => {
  const windowHeight = Dimensions.get('window').height;
  return (
    <Box flex={1}>
      <DrawerContentScrollView {...props}>
        <Box
          px={3}
          py={5}
          position="relative"
          overflow="hidden"
          marginTop={-15}
          backgroundColor={theme.colors.secondary[500]}
          borderBottomLeftRadius={30}
          height={windowHeight / 3.0}>
          <Box
            position="absolute"
            top="-24%"
            left="-24%"
            width={200}
            height={200}
            bgColor="secondary.400"
            opacity={0.6}
            rounded="full"></Box>
          <Box
            position="absolute"
            bottom="-24%"
            right="-24%"
            width={130}
            height={130}
            bgColor="secondary.400"
            opacity={0.6}
            rounded="full"></Box>
          <Avatar
            bg="cyan.500"
            size="xl"
            source={{
              uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            }}>
            TE
          </Avatar>
          <Box mt={2}>
            <Typography
              style={style.textName}
              fontWeight="semibold"
              fontSize="xl">
              John Doe ST.998
            </Typography>
            <Typography style={style.textName}>
              Loyer at MS.Oklaoda jr
            </Typography>
          </Box>
        </Box>
        <Box>
          <DrawerItemList {...props} />
        </Box>
      </DrawerContentScrollView>
      <Box p={3}>
        <Button colorScheme="gray">Log out</Button>
      </Box>
    </Box>
  );
};

const style = StyleSheet.create({
  textName: {
    color: '#fff',
  },
});

export default DrawerContent;
