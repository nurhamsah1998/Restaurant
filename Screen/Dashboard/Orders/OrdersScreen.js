import React from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {theme} from '../../../App';
import {FormatCurrency} from '../../../Component/FormatCurrency';
import {EmptyData} from './Items';

function OrdersScreen() {
  const [tabValue, setTabValue] = React.useState('delivery');
  const [loading, setLoading] = React.useState(true);
  const [orders, setOrders] = React.useState([]);
  const navigate = useNavigation();

  const tabs = [
    {
      label: 'Delivery',
      value: 'delivery',
      icon: 'delivery-dining',
    },
    {
      label: 'Dine In',
      value: 'dine_in',
      icon: 'local-dining',
    },
  ];
  const style = StyleSheet.create({
    container: {flex: 1, backgroundColor: theme.colors.white},
    tab: {
      flexDirection: 'row',
      marginTop: 20,
      marginHorizontal: 10,
      justifyContent: 'space-between',
    },
    loading: {justifyContent: 'center', alignItems: 'center', flex: 1},
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
    },
    panelNonActive: {
      width: '50%',
      borderBottomWidth: 4,
      borderBottomColor: theme.colors.divider,
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
    iconTabs: {
      textAlign: 'center',
    },
  });

  const handlePressOrder = body => {
    navigate.navigate('RootDashboard', {
      screen: 'OrdersDetails',
      params: {body, backPath: {parent: 'Dashboard', child: 'Orders'}},
    });
  };

  const getData = async () => {
    setLoading(true);
    try {
      const value = await AsyncStorage.getItem('@orders');
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        setTimeout(() => {
          console.log(loading, '====');
          setLoading(false);
          const filterOrdersByType = jsonValue?.filter(
            i => i.type === tabValue,
          );
          setOrders(filterOrdersByType || []);
        }, 2000);
      } else {
        setTimeout(() => {
          setLoading(false);
          setOrders([]);
        }, 2000);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
      // error reading value
    }
  };
  console.log(orders, ' INI ITEMS');
  const IsEmptyOrders = () => {
    return (
      <>
        {orders?.length <= 0 ? (
          <EmptyData
            firstTitle="You Have No Orders"
            secondTitle="ffind food you like"
            thirtTitle="Here!"
          />
        ) : (
          <FlatList
            data={orders}
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
                      {FormatCurrency(item.total)}
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
        )}
      </>
    );
  };
  React.useEffect(() => {
    getData();
  }, [tabValue]);
  return (
    <View style={style.container}>
      <View style={style.tab}>
        {tabs.map((item, index) => (
          <TouchableOpacity
            onPress={() => setTabValue(item.value)}
            key={index}
            style={
              tabValue === item.value ? style.panelActive : style.panelNonActive
            }>
            <MaterialIcons
              name={item.icon}
              style={style.iconTabs}
              size={30}
              color={
                tabValue === item.value
                  ? theme.colors.primary
                  : theme.colors.backdrop
              }
            />
            <Text
              style={
                tabValue === item.value
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
        {loading ? (
          <View style={style.loading}>
            <ActivityIndicator
              animating={true}
              color={theme.colors.primary}
              size={50}
            />
            <Text style={{marginTop: 20}}>Please wait</Text>
          </View>
        ) : (
          <IsEmptyOrders />
        )}
      </View>
    </View>
  );
}

export default OrdersScreen;
