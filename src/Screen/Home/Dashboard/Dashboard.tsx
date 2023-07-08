import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Typography from 'Component/Common/Typography';
import HeaderSection from './HeaderSection';
import {Box} from 'native-base';
import FeatureSection from './FeatureSection';
import PromotionSection from './Promotion';

function Dashboard({navigation}: {navigation?: any}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Box>
          <HeaderSection navigation={navigation} />
        </Box>
        <FeatureSection />
        <PromotionSection />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});

export default Dashboard;
