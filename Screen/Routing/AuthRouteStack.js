import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Auth/Login';

function AuthRouteStack() {
  const AuthNavigationStack = createNativeStackNavigator();
  return (
    <AuthNavigationStack.Navigator>
      <AuthNavigationStack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
    </AuthNavigationStack.Navigator>
  );
}

export default AuthRouteStack;
