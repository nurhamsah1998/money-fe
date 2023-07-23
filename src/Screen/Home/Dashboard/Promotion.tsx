import React from 'react';
import {Text, Box} from 'native-base';
import {StyleSheet, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

interface PROMO {
  title: string;
  desc: string;
  img: any;
}

function PromotionSection() {
  const width = Dimensions.get('window').width;
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
      <Text style={styles.label}>Promotion</Text>
      <Box style={{paddingBottom: 20}}>
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={promoImg}
          scrollAnimationDuration={5000}
          renderItem={({item}) => (
            <Box
              style={{
                alignSelf: 'center',
                borderRadius: 20,
                elevation: 4,
                shadowColor: '#000',
              }}>
              <Image style={{alignSelf: 'center'}} source={item.img} />
            </Box>
          )}
        />
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  containerPromotion: {
    marginBottom: 80,
  },
  label: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
});
export default PromotionSection;
