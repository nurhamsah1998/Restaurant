import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SearchScreen from '../../Dashboard/Search/SearchScreen';

function Index({navigation, route}) {
  const SearchScreenStack = createNativeStackNavigator();
  return (
    <SearchScreenStack.Navigator
      screenOptions={{animation: 'fade_from_bottom'}}>
      <SearchScreenStack.Screen
        options={{headerShown: false}}
        name="SearchScreen"
        component={SearchScreen}
      />
    </SearchScreenStack.Navigator>
  );
}

export default Index;
