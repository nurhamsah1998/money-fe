import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from './Dashboard/Dashboard';
import {theme} from 'src/Theme/theme';

function HomeNavigator() {
  const Tab = createBottomTabNavigator();
  const iconNavbar = [
    {iconName: 'home', name: 'Home'},
    {iconName: 'search', name: 'Search'},
    {iconName: 'wysiwyg', name: 'Orders'},
    {iconName: 'account-circle', name: 'Account'},
  ];
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          const pick = iconNavbar.find(i => i?.name === route.name);
          if (pick) {
            iconName = focused ? pick.iconName : pick.iconName;
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary[500],
        tabBarInactiveTintColor: theme.colors.primary[500],
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          elevation: 3,
          left: 10,
          right: 10,
          borderRadius: 20,
          shadowColor: '#000',
          // backgroundColor: 'pink',
        },
      })}>
      <Tab.Screen name="Home" component={Dashboard} />
    </Tab.Navigator>
  );
}

export default HomeNavigator;
