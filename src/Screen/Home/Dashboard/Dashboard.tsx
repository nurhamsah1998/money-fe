import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {View, Text, Button, SafeAreaView, Dimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import {Box} from 'native-base';
import {StyleSheet} from 'react-native';

import BackgroundHeader from './BackgroundHeader';
import {NavigationProp} from '@react-navigation/native';
import Typography from 'Component/Common/Typography';
import BoxContent from './BoxContent';

function Dashboard({navigation}: {navigation?: any}) {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <BackgroundHeader navigation={navigation} />
      <Box style={style.balance}>
        <Typography style={style.labelMoneyBalance}>Your Balance</Typography>
        <Typography fontSize="4xl" style={style.amountMoneyBalance}>
          Rp1.250.000
        </Typography>
        <BoxContent />
      </Box>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  boxInformation: {
    elevation: 6,
    shadowColor: '#000',
  },
  balance: {
    marginTop: -140,
  },
  amountMoneyBalance: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  labelMoneyBalance: {
    textAlign: 'center',
    color: '#fff',
  },
});
export default Dashboard;
