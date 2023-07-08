import React from 'react';
import {Text, Box} from 'native-base';
import {StyleSheet, Dimensions, FlatList, Image} from 'react-native';

interface PROMO {
  title: string;
  desc: string;
  img: any;
}

const winHeight = Dimensions.get('window').height;
function PromotionSection() {
  const promoImg: PROMO[] = [
    {
      title: 'Activity',
      desc: 'see your recent transaction activity',
      img: require('Assets/1.png'),
    },
    {
      title: 'Financial Analysis',
      desc: 'all your financial analysis is here',
      img: require('Assets/2.png'),
    },
    {
      title: 'Opportunity',
      desc: 'find your business opportunity',
      img: require('Assets/3.png'),
    },
    {
      title: 'More Menu',
      desc: 'check all the features of the MONEY app here',
      img: require('Assets/4.png'),
    },
  ];

  return (
    <Box style={styles.containerPromotion}>
      <Text>Promotion</Text>
      <FlatList
        horizontal
        data={promoImg}
        ItemSeparatorComponent={() => <Box style={{width: 20, height: 20}} />}
        renderItem={({item}) => <Image source={item.img} />}
        keyExtractor={item => item.title}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  containerPromotion: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 75,
  },
});
export default PromotionSection;
