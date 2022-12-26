import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import HomeScreen from '../Dashboard/HomeScreen/HomeScreen';
import SettingsScreen from '../Dashboard/Setting/SettingsScreen';
import AccountScreen from '../Dashboard/Account/AccountScreen';
import SearchScreenRouting from './SearchScreenRouting';
import {theme} from '../../App';

function DashboardRouteStack(route) {
  const DashboardNavigationStackTabs = createBottomTabNavigator();
  const iconNavbar = [
    {iconName: 'home', name: 'Home'},
    {iconName: 'search1', name: 'Search'},
    {iconName: 'setting', name: 'Setting'},
    {iconName: 'user', name: 'Account'},
  ];
  const handleNavbar = ({route}) => ({
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
        name="Setting"
        component={SettingsScreen}
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
