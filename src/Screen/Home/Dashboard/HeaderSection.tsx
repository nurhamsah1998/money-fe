import React from 'react';
import {Text, Box} from 'native-base';
import {StyleSheet, Dimensions} from 'react-native';
import {theme} from 'src/Theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExpenseIcon from 'Assets/expense.svg';
import IcomeIcon from 'Assets/income.svg';

const winHeight = Dimensions.get('window').height;
function HeaderSection({navigation}: {navigation: any}) {
  return (
    <Box>
      <Box style={styles.bgSection}>
        <Box style={styles.hamburger}>
          <Ionicons
            onPress={() => navigation.toggleDrawer()}
            name="reorder-three-outline"
            color="#fff"
            size={50}
          />
        </Box>
        <Box style={styles.circleOne} />
        <Box style={styles.circleTwo} />
        <Box style={styles.intro}>
          <Text fontSize="2xl" color="#fff" mb={10} fontWeight={600}>
            Hello Nurhamsah,
          </Text>
        </Box>
        <Box style={styles.containerInfo}>
          <Text>Current Balance</Text>
          <Text
            fontSize="4xl"
            fontWeight={500}
            color={theme.colors.disable[500]}>
            Rp1.200.000
          </Text>
          <Box style={styles.trafic}>
            <Box flex={1}>
              <Text color={theme.colors.disable[400]}>Today Income</Text>
              <Box style={styles.traficStatistic}>
                <IcomeIcon />
                <Text color={theme.colors.primary[500]} fontWeight={600}>
                  Rp20.000
                </Text>
              </Box>
            </Box>
            <Box flex={1}>
              <Text color={theme.colors.disable[400]}>Today Income</Text>
              <Box style={styles.traficStatistic}>
                <ExpenseIcon />
                <Text color={theme.colors.secondary[500]} fontWeight={600}>
                  Rp20.000
                </Text>
              </Box>
            </Box>
          </Box>
          <Box style={styles.activitySection}>
            <Text color={theme.colors.disable[400]}>Last Activity</Text>
            <Box style={styles.boxActivity}>
              <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between">
                <Text color="#fff" fontWeight={500}>
                  Income stuf
                </Text>
                <Text style={styles.timeAt}>4 minutes ago</Text>
              </Box>
              <Box flexDirection="row" alignItems="center" mt={5}>
                <Text style={styles.incomeBox}>Income</Text>
                <Text color="#fff" ml={3} fontWeight={600}>
                  Rp50.000
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  activitySection: {marginTop: 10},
  hamburger: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 6,
  },
  intro: {
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: 5,
    alignItems: 'center',
    height: '100%',
  },
  incomeBox: {
    backgroundColor: '#fff',
    color: theme.colors.primary[500],
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderRadius: 5,
    fontSize: 12,
  },
  timeAt: {
    backgroundColor: '#fff',
    color: theme.colors.primary[500],
    padding: 3,
    borderRadius: 5,
    fontSize: 12,
  },
  boxActivity: {
    backgroundColor: theme.colors.primary[500],
    padding: 5,
    borderRadius: 10,
  },
  trafic: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  traficStatistic: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: -4,
    // justifyContent: 'space-between',
  },
  containerInfo: {
    backgroundColor: '#fff',
    width: '90%',
    zIndex: 3,
    alignSelf: 'center',
    borderRadius: 20,
    position: 'absolute',
    bottom: '-45%',
    elevation: 3,
    shadowColor: '#000',
    padding: 15,
  },
  bgSection: {
    backgroundColor: theme.colors.primary[500],
    height: winHeight / 2.7,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    position: 'relative',
  },
  circleOne: {
    width: winHeight / 3.9,
    height: winHeight / 3.9,
    backgroundColor: theme.colors.primary[400],
    borderRadius: 100,
    position: 'absolute',
    top: '-20%',
    right: '-20%',
    zIndex: 2,
    borderColor: theme.colors.primary[500],
    borderWidth: 30,
  },
  circleTwo: {
    zIndex: 1,
    width: winHeight / 2.7,
    height: winHeight / 2.7,
    backgroundColor: theme.colors.primary[400],
    borderRadius: 200,
    position: 'absolute',
    top: '-30%',
    right: '-27%',
  },
});
export default HeaderSection;
