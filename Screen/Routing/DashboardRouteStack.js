import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import HomeScreen from '../Dashboard/HomeScreen/HomeScreen';
import OrdersScreen from '../Dashboard/Orders/OrdersScreen';
import AccountScreen from '../Dashboard/Account/AccountScreen';
import SearchScreenRouting from './SearchScreenRouting';
import {theme} from '../../App';
import {View} from 'react-native';

function DashboardRouteStack(route) {
  const DashboardNavigationStackTabs = createBottomTabNavigator();
  const iconNavbar = [
    {iconName: 'home', name: 'Home'},
    {iconName: 'search1', name: 'Search'},
    {iconName: 'filetext1', name: 'Orders'},
    {iconName: 'user', name: 'Account'},
  ];
  const handleNavbar = ({route, focused}) => ({
    headerShown: false,
    tabBarIcon: ({focused, color, size}) => {
      let iconName;
      const pick = iconNavbar.find(i => i?.name === route.name);
      if (pick) {
        iconName = focused ? pick.iconName : pick.iconName;
      }
      // You can return any component that you like here!
      return <AntDesign name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: theme.colors.primary,
    tabBarInactiveTintColor: 'gray',
    tabBarLabelStyle: {fontSize: 15, paddingBottom: 10, fontWeight: 'bold'},
    tabBarStyle: {
      margin: 15,
      position: 'absolute',
      borderRadius: 20,
      height: 60,
      padding: 5,
    },
    tabBarBackground: () => (
      <View
        style={{
          backgroundColor: theme.colors.white,
          width: '100%',
          height: '100%',
          borderRadius: 20,
        }}></View>
    ),
    // tabBarActiveBackgroundColor: theme.colors.primary,
  });
  return (
    <DashboardNavigationStackTabs.Navigator
      initialRouteName={'Home'}
      screenOptions={handleNavbar}>
      <DashboardNavigationStackTabs.Screen name="Home" component={HomeScreen} />
      <DashboardNavigationStackTabs.Screen
        options={{headerShown: false}}
        name="Search"
        component={SearchScreenRouting}
      />
      <DashboardNavigationStackTabs.Screen
        options={{headerShown: false}}
        name="Orders"
        component={OrdersScreen}
      />
      <DashboardNavigationStackTabs.Screen
        options={{headerShown: false}}
        name="Account"
        component={AccountScreen}
      />
    </DashboardNavigationStackTabs.Navigator>
  );
}

export default DashboardRouteStack;
