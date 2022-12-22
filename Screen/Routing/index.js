import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import AuthRouteStack from './AuthRouteStack';
import DashboardRouteStack from './DashboardRouteStack';
import LoadingSplashScreen from './LoadingSplashScreen';

function Index() {
  const navigation = useNavigation();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@access_token');
      if (value !== null) {
        navigation.navigate('Dashboard');
      } else {
        navigation.navigate('AuthRouteStack');
      }
    } catch (e) {
      // error reading value
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  const RootNavigationStack = createNativeStackNavigator();
  return (
    <RootNavigationStack.Navigator screenOptions={{headerShown: false}}>
      <RootNavigationStack.Screen
        name="LoadingSplashScreen"
        component={LoadingSplashScreen}
      />
      <RootNavigationStack.Screen
        name="Dashboard"
        component={DashboardRouteStack}
      />
      <RootNavigationStack.Screen
        name="AuthRouteStack"
        component={AuthRouteStack}
      />
    </RootNavigationStack.Navigator>
  );
}

export default Index;
