import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';

import {login, logOut} from '../../Store/AuthReducer';
import AuthRouteStack from './AuthRouteStack';
import DashboardRouteStack from './DashboardRouteStack';
import LoadingSplashScreen from './LoadingSplashScreen';
import ProductDetail from '../Dashboard/Search/ProductDetail';
import OrdersDetails from '../Dashboard/Search/OrdersDetails';
import CartList from './Header/CartScreen/CartList';
import FavoriteList from './Header/FavoriteScreen/FavoriteList';

function Index() {
  const auth = useSelector(auth => auth.auth);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@access_token');
      if (value !== null) {
        dispatch(login());
      } else {
        dispatch(logOut());
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
  const RootDashboard = () => {
    return (
      <RootDashboardNavigationStack.Navigator
        screenOptions={{headerShown: false}}>
        <RootDashboardNavigationStack.Screen
          name="Dashboard"
          component={DashboardRouteStack}
        />
        <RootDashboardNavigationStack.Screen
          options={{headerShown: false}}
          name="ProductDetail"
          component={ProductDetail}
        />
        <RootDashboardNavigationStack.Screen
          options={{headerShown: false}}
          name="OrdersDetails"
          component={OrdersDetails}
        />
        <RootDashboardNavigationStack.Screen
          options={{headerShown: false}}
          name="CartList"
          component={CartList}
        />
        <RootDashboardNavigationStack.Screen
          options={{headerShown: false}}
          name="FavoriteList"
          component={FavoriteList}
        />
      </RootDashboardNavigationStack.Navigator>
    );
  };
  if (auth.isLoading) {
    return <LoadingSplashScreen />;
  }
  return (
    <>
      <RootNavigationStack.Navigator screenOptions={{headerShown: false}}>
        {auth.isAuth ? (
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
    </>
  );
}

export default Index;
