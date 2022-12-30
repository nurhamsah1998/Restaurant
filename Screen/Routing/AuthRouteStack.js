import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import OnBoardding from '../Auth/OnBoardding';

function AuthRouteStack() {
  const AuthNavigationStack = createNativeStackNavigator();
  return (
    <AuthNavigationStack.Navigator
      screenOptions={{animation: 'fade_from_bottom', headerShown: false}}>
      <AuthNavigationStack.Screen name="Login" component={Login} />
      <AuthNavigationStack.Screen name="Register" component={Register} />
      <AuthNavigationStack.Screen name="OnBoardding" component={OnBoardding} />
    </AuthNavigationStack.Navigator>
  );
}

export default AuthRouteStack;
