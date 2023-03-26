import React from 'react';
import {Dimensions} from 'react-native';
import {Box} from 'native-base';
import {StyleSheet} from 'react-native';
import Typography from 'Component/Common/Typography';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from 'src/Theme/theme';
import IconTextList from 'Component/Common/IconTextList';

function BoxContent() {
  const windowHeight = Dimensions.get('window').height;
  return (
    <Box
      height={windowHeight / 2.5}
      bgColor="white"
      style={style.boxInformation}
      borderRadius={20}
      mx={4}
      p={3}
      flexDirection="row"
      justifyContent="space-between">
      <Box flexDirection="row">
        <Ionicons
          name="md-arrow-up"
          size={25}
          color={theme.colors.primary[500]}
        />
        <Box flexDirection="column" ml={2}>
          <Typography>Income</Typography>
          <Typography style={style.IncomeTopAmount}>+ Rp200.000</Typography>
          <IconTextList title="23/09/2023" />
        </Box>
      </Box>
      <Box flexDirection="row">
        <Ionicons
          name="md-arrow-down"
          size={25}
          color={theme.colors.red[500]}
        />
        <Box flexDirection="column" ml={2}>
          <Typography>Expense</Typography>
          <Typography style={style.ExpenseTopAmount}>- Rp5.300</Typography>
          <IconTextList title="02/02/2023" />
        </Box>
      </Box>
    </Box>
  );
}
const style = StyleSheet.create({
  boxInformation: {
    elevation: 6,
    shadowColor: '#000',
  },
  IncomeTopAmount: {
    color: theme.colors.primary[500],
  },
  ExpenseTopAmount: {
    color: theme.colors.red[500],
  },
});

export default BoxContent;
