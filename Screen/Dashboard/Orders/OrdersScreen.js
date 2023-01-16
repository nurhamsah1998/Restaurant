import React from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {theme} from '../../../App';
import {FormatCurrency} from '../../../Component/FormatCurrency';

function OrdersScreen({navigation}) {
  const [tabValue, setTabValue] = React.useState(0);
  const navigate = useNavigation();
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
      id: 1,
      createdAt: '21 jan 2023  05:11',
      status: 'unpaid',
      expiredAt: '01:34:00',
      price: 30000,
    },
    {
      invoice: 'ORDER - INV1',
      id: 2,
      createdAt: '21 jan 2023  05:11',
      status: 'paid',
      expiredAt: '01:34:00',
      price: 30000,
    },
    {
      invoice: 'ORDER - INV1',
      id: 3,
      createdAt: '21 jan 2023  05:11',
      status: 'unpaid',
      expiredAt: '01:34:00',
      price: 30000,
    },
    {
      invoice: 'ORDER - INV1',
      id: 4,
      createdAt: '21 jan 2023  05:11',
      status: 'paid',
      expiredAt: '01:34:00',
      price: 30000,
    },
    {
      invoice: 'ORDER - INV1',
      id: 5,
      createdAt: '21 jan 2023  05:11',
      status: 'paid',
      expiredAt: '01:34:00',
      price: 30000,
    },
    {
      invoice: 'ORDER - INV1',
      id: 6,
      createdAt: '21 jan 2023  05:11',
      status: 'unpaid',
      expiredAt: '01:34:00',
      price: 30000,
    },
  ];
  const style = StyleSheet.create({
    container: {flex: 1},
    tab: {
      flexDirection: 'row',
      marginTop: 20,
      marginHorizontal: 10,
      justifyContent: 'space-between',
    },
    labelTabActive: {
      textAlign: 'center',
      fontFamily: 'Poppins-Bold',
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
    card: {
      backgroundColor: theme.colors.white,
      elevation: 5,
      shadowColor: '#000',
      borderRadius: 10,
      margin: 10,
      padding: 10,
    },
    containerCard: {
      flex: 1,
    },
    sectionOne: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    sectionTwo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    price: {
      fontFamily: 'Poppins-Medium',
      color: theme.colors.primary,
    },
    footerFlatList: {height: 70, width: '100%'},
    statusUnpaid: {
      backgroundColor: theme.colors.errorBackground,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 10,
      fontFamily: 'Poppins-Medium',
      color: theme.colors.errorFont,
      textTransform: 'capitalize',
    },
    statusPaid: {
      backgroundColor: theme.colors.successBackground,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 10,
      fontFamily: 'Poppins-Medium',
      color: theme.colors.successFont,
      textTransform: 'capitalize',
    },
    tag: {
      marginTop: -5,
    },
  });
  const handlePressOrder = item => {
    navigate.navigate('RootDashboard', {
      screen: 'Orders',
      params: item,
    });
  };
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
              variant="titleMedium">
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={style.containerCard}>
        <FlatList
          data={data}
          ListFooterComponent={<View style={style.footerFlatList} />}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={style.card}
                onPress={() => handlePressOrder(item)}>
                <View style={style.sectionOne}>
                  <View>
                    <Text variant="titleMedium">{item.invoice}</Text>
                    <Text>created at</Text>
                    <Text variant="titleMedium" style={style.tag}>
                      {item.createdAt}
                    </Text>
                  </View>
                  <Text
                    style={
                      item.status === 'paid'
                        ? style.statusPaid
                        : style.statusUnpaid
                    }
                    variant="titleSmall">
                    {item.status}
                  </Text>
                </View>
                <View style={style.sectionTwo}>
                  <Text variant="titleMedium" style={style.price}>
                    {FormatCurrency(item.price)}
                  </Text>
                  <View>
                    <Text>expired at</Text>
                    <Text variant="titleMedium" style={style.tag}>
                      {item.expiredAt}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

export default OrdersScreen;
