import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyButton from '../../../Component/Element/MyButton';
import DineIn from './DineIn';
import Delivery from './Delivery';
import {theme} from '../../../App';

function OrdersScreen({navigation}) {
  const [tabValue, setTabValue] = React.useState(0);
  const tabs = [
    {
      label: 'Delivery',
      value: 0,
    },
    {
      label: 'Dine In',
      value: 1,
    },
  ];
  const data = [
    {
      invoice: 'ORDER - INV1',
      createdAt: '21 jan 2023  05:11',
      status: 'paid',
      expiredAt: '01:34:00',
      price: 30000,
    },
    {
      invoice: 'ORDER - INV1',
      createdAt: '21 jan 2023  05:11',
      status: 'paid',
      expiredAt: '01:34:00',
      price: 30000,
    },
    {
      invoice: 'ORDER - INV1',
      createdAt: '21 jan 2023  05:11',
      status: 'paid',
      expiredAt: '01:34:00',
      price: 30000,
    },
  ];
  return (
    <View style={style.container}>
      <View style={style.tab}>
        {tabs.map((item, index) => (
          <TouchableOpacity
            onPress={() => setTabValue(index)}
            key={index}
            style={
              tabValue === index ? style.panelActive : style.panelNonActive
            }>
            <Text
              style={
                tabValue === index
                  ? style.labelTabActive
                  : style.labelTabNonActive
              }
              variant="headlineSmall">
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={style.headerItem}>
        <Text variant="titleMedium">23 Total</Text>
        <Text variant="titleMedium">Clear</Text>
      </View>
      {/* <View></View> */}
    </View>
  );
}
const style = StyleSheet.create({
  container: {flex: 1},
  tab: {
    flexDirection: 'row',
    marginTop: 20,
    padding: 10,
    justifyContent: 'space-between',
  },
  labelTabActive: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  labelTabNonActive: {
    textAlign: 'center',
    color: theme.colors.backdrop,
  },
  panelActive: {
    width: '50%',
    borderBottomWidth: 4,
    borderBottomColor: theme.colors.primary,
    paddingBottom: 10,
  },
  panelNonActive: {
    width: '50%',
    borderBottomWidth: 4,
    borderBottomColor: theme.colors.white,
    paddingBottom: 10,
  },
  headerItem: {flexDirection: 'row'},
});

export default OrdersScreen;
