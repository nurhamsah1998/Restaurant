import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, StyleSheet} from 'react-native';

import HomeScreen from '../Dashboard/HomeScreen/HomeScreen';
import OrdersScreen from '../Dashboard/Orders/OrdersScreen';
import AccountScreen from '../Dashboard/Account/AccountScreen';
import SearchScreenRouting from './SearchScreenRouting';
import {theme} from '../../App';
import SearchHeader from './Header/SearchHeader';
import OrdersHeader from './Header/OrdersHeader';
import DashboardHeader from './Header/DashboardHeader';

function DashboardRouteStack(route) {
  const style = StyleSheet.create({
    tabNavigation: {
      backgroundColor: '#e8fdf1',
      width: '100%',
      height: '100%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      elevation: 20,
      shadowColor: '#000',
    },
  });

  const DashboardNavigationStackTabs = createBottomTabNavigator();
  const iconNavbar = [
    {iconName: 'home', name: 'Home'},
    {iconName: 'search1', name: 'Search'},
    {iconName: 'filetext1', name: 'Orders'},
    {iconName: 'user', name: 'Account'},
  ];
  const handleNavbar = ({route, focused}) => ({
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
      position: 'absolute',
      height: 60,
      padding: 5,
    },
    tabBarBackground: () => <View style={style.tabNavigation} />,
    // tabBarActiveBackgroundColor: theme.colors.primary,
  });
  return (
    <DashboardNavigationStackTabs.Navigator
      initialRouteName={'Home'}
      screenOptions={handleNavbar}>
      <DashboardNavigationStackTabs.Screen
        options={{header: () => <DashboardHeader />}}
        name="Home"
        component={HomeScreen}
      />
      <DashboardNavigationStackTabs.Screen
        options={{
          header: () => <SearchHeader />,
        }}
        name="Search"
        component={SearchScreenRouting}
      />
      <DashboardNavigationStackTabs.Screen
        options={{
          header: () => <OrdersHeader />,
        }}
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
