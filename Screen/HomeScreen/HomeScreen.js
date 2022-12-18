import * as React from 'react';
import {View, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import 'react-native-reanimated';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Banner from './Banner';

function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <Banner />
    </View>
  );
}

export default HomeScreen;
