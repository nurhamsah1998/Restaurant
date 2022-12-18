import React from 'react';
import {Text, View, Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../HomeScreen/HomeScreen';
import Account from '../Account/Account';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../Setting/SettingsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

function Dashboard({navigation}) {
  const iconNavbar = [
    {iconName: 'home', name: 'Home'},
    {iconName: 'setting', name: 'Settings'},
    {iconName: 'user', name: 'Account'},
  ];
  const handleNavbar = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
      let iconName;
      const pick = iconNavbar.find(i => i?.name === route.name);
      if (pick) {
        iconName = focused ? pick.iconName : pick.iconName;
      }
      // You can return any component that you like here!
      return <AntDesign name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'purple',
    tabBarInactiveTintColor: 'gray',
  });

  return (
    <Tab.Navigator screenOptions={handleNavbar}>
      <Tab.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

export default Dashboard;
