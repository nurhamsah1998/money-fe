import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {View, Text, Button, SafeAreaView, Dimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import {Box} from 'native-base';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackgroundHeader from './BackgroundHeader';
import {theme} from 'src/Theme/theme';
import Typography from 'Component/Typography';

function Dashboard() {
  const dispatch = useDispatch();
  const windowHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView style={{flex: 1}}>
      <BackgroundHeader />
      <Box
        height={windowHeight / 2.5}
        bgColor="white"
        style={style.boxInformation}
        borderRadius={20}
        mx={2}
        mt={-20}
        p={3}>
        <Box>
          <Ionicons
            name="md-arrow-up"
            size={40}
            color={theme.colors.primary[500]}
          />
          <Typography>Profite</Typography>
        </Box>
      </Box>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  boxInformation: {
    elevation: 6,
    shadowColor: '#000',
  },
});
export default Dashboard;
