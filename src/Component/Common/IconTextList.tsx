import Typography from 'Component/Common/Typography';
import {Box} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {StyleSheet} from 'react-native';
import {theme} from 'src/Theme/theme';

function IconTextList({
  title,
  icon = 'md-calendar-sharp',
}: {
  title?: string;
  icon?: string;
}) {
  return (
    <Box flexDirection="row" alignItems="center" my={1}>
      <Ionicons name={icon} size={18} color={theme.colors.gray[400]} />
      <Typography style={style.text} fontSize="xs">
        {title}
      </Typography>
    </Box>
  );
}
const style = StyleSheet.create({
  text: {
    marginLeft: 10,
  },
});
export default IconTextList;
