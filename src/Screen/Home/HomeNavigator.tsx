import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {theme} from 'src/Theme/theme';
import Dashboard from './Dashboard/Dashboard';
import {View, Button} from 'react-native';
import DrawerContent from './DrawerContent';
import Expenses from './Expenses/Expenses';
import Income from './Income/Income';

function HomeNavigator() {
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  const iconNavbar = [
    {iconName: 'home', name: 'Home'},
    {iconName: 'search', name: 'Income'},
    {iconName: 'wysiwyg', name: 'Expenses'},
  ];
  const iconDrawerNavbar = [
    {iconName: 'home', name: 'Dashboard Screen'},
    {iconName: 'search', name: 'Search'},
  ];
  function NotificationsScreen() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button title="Go back home" />
      </View>
    );
  }

  const DashboardScreen = () => {
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
          },
        })}>
        <Tab.Screen name="Home" component={Dashboard} />
        <Tab.Screen name="Income" component={Income} />
        <Tab.Screen name="Expenses" component={Expenses} />
      </Tab.Navigator>
    );
  };

  return (
    <>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        screenOptions={({route}) => ({
          headerShown: false,
          drawerIcon: ({focused, color, size}) => {
            let iconName;
            const pick = iconDrawerNavbar.find(i => i?.name === route.name);
            if (pick) {
              iconName = focused ? pick.iconName : pick.iconName;
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          drawerActiveBackgroundColor: theme.colors.primary[200],
          drawerActiveTintColor: theme.colors.primary[500],
        })}
        initialRouteName="Dashboard Screen">
        <Drawer.Screen name="Dashboard Screen" component={DashboardScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </>
  );
}

export default HomeNavigator;
