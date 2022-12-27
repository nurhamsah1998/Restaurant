import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import AuthRouteStack from './AuthRouteStack';
import DashboardRouteStack from './DashboardRouteStack';
import LoadingSplashScreen from './LoadingSplashScreen';
import OnBoardding from '../Auth/OnBoardding';
import {AuthToken} from './contextHelper';
import ProductDetail from '../Dashboard/Search/ProductDetail';

function Index() {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState({
    isLoading: true,
    isAuth: false,
  });
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@access_token');
      if (value !== null) {
        setLoading({isLoading: false, isAuth: true});
        // navigation.navigate('Dashboard');
      } else {
        setLoading(false);
        setLoading({isLoading: false, isAuth: false});
        // navigation.navigate('AuthRouteStack');
      }
    } catch (e) {
      // error reading value
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  const RootNavigationStack = createNativeStackNavigator();
  const RootDashboardNavigationStack = createNativeStackNavigator();
  const AuthContext = React.useMemo(() => {
    return {
      signIn: () => {
        setLoading({isLoading: false, isAuth: true});
      },
      signOut: () => {
        setLoading({isLoading: false, isAuth: false});
      },
    };
  }, []);
  const RootDashboard = () => {
    return (
      <RootDashboardNavigationStack.Navigator
        screenOptions={{headerShown: false}}>
        <RootDashboardNavigationStack.Screen
          name="Dashboard"
          component={DashboardRouteStack}
        />
        <RootDashboardNavigationStack.Screen
          name="OnBoardding"
          component={OnBoardding}
        />
        <RootDashboardNavigationStack.Screen
          options={{headerShown: false}}
          name="ProductDetail"
          component={ProductDetail}
        />
      </RootDashboardNavigationStack.Navigator>
    );
  };
  if (loading.isLoading) {
    return <LoadingSplashScreen />;
  }
  return (
    <AuthToken.Provider value={AuthContext}>
      <RootNavigationStack.Navigator screenOptions={{headerShown: false}}>
        {loading.isAuth ? (
          <RootNavigationStack.Screen
            name="RootDashboard"
            component={RootDashboard}
          />
        ) : (
          <RootNavigationStack.Screen
            name="AuthRouteStack"
            component={AuthRouteStack}
          />
        )}
      </RootNavigationStack.Navigator>
    </AuthToken.Provider>
  );
}

export default Index;
