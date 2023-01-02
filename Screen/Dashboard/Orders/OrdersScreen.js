import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyButton from '../../../Component/Element/MyButton';
import DineIn from './DineIn';
import Delivery from './Delivery';
import {theme} from '../../../App';

function OrdersScreen({navigation}) {
  const [tabs, setTabs] = React.useState(0);

  return (
    <View>
      <Text>Orders</Text>
    </View>
  );
}

export default OrdersScreen;
