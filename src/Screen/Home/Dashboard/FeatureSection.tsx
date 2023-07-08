import React from 'react';
import {Text, Box} from 'native-base';
import {StyleSheet, Dimensions} from 'react-native';
import BriefCase from 'Assets/brief_case.svg';
import More from 'Assets/more.svg';
import Activity from 'Assets/activity.svg';
import Finacial from 'Assets/finacial.svg';
import {theme} from 'src/Theme/theme';

interface FEATURE_MENU {
  title: string;
  desc: string;
  icon: any;
  bgColor: string;
}

const winHeight = Dimensions.get('window').height;
function FeatureSection() {
  const menuOne: FEATURE_MENU[] = [
    {
      title: 'Activity',
      desc: 'see your recent transaction activity',
      bgColor: '#8F4BFF',
      icon: <Activity />,
    },
    {
      title: 'Financial Analysis',
      desc: 'all your financial analysis is here',
      bgColor: '#FF614B',
      icon: <Finacial />,
    },
  ];
  const menuTwo: FEATURE_MENU[] = [
    {
      title: 'Opportunity',
      desc: 'find your business opportunity',
      bgColor: '#30BB9A',
      icon: <BriefCase />,
    },
    {
      title: 'More Menu',
      desc: 'check all the features of the MONEY app here',
      bgColor: '#3081BB',
      icon: <More />,
    },
  ];
  return (
    <Box style={styles.containerFeature}>
      <Text>Feature Menu</Text>
      <Box style={styles.containerBoxFeature}>
        {menuOne.map((item: FEATURE_MENU, index: number) => (
          <Box
            style={[styles.boxFeature, {backgroundColor: item.bgColor}]}
            key={index}>
            <Text fontSize="sm" color="#fff" fontWeight={600}>
              {item.title}
            </Text>
            <Text fontSize="xs" color="#fff" zIndex={3}>
              {item.desc}
            </Text>
            <Box style={styles.icon}>{item.icon}</Box>
          </Box>
        ))}
      </Box>
      <Box style={[styles.containerBoxFeature, {marginTop: 10}]}>
        {menuTwo.map((item: FEATURE_MENU, index: number) => (
          <Box
            style={[styles.boxFeature, {backgroundColor: item.bgColor}]}
            key={index}>
            <Text fontSize="sm" color="#fff" fontWeight={600}>
              {item.title}
            </Text>
            <Text fontSize="xs" color="#fff" zIndex={3}>
              {item.desc}
            </Text>
            <Box style={styles.icon}>{item.icon}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    right: 10,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerBoxFeature: {
    flexDirection: 'row',
    gap: 10,
  },
  containerFeature: {
    marginTop: '35%',
    marginHorizontal: 20,
  },
  boxFeature: {
    height: 100,
    flex: 1,
    borderRadius: 10,
    padding: 5,
    position: 'relative',
  },
});
export default FeatureSection;
