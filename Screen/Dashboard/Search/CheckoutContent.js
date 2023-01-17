import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {theme} from '../../../App';
import {FormatCurrency} from '../../../Component/FormatCurrency';

function CheckoutContent({tabs, setTabs, total}) {
  const style = StyleSheet.create({
    box: {
      justifyContent: 'center',
      borderColor: theme.colors.primary,
      borderWidth: 1,
      flex: 1,
      height: 100,
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      borderRadius: 10,
    },
    boxContainer: {
      flexDirection: 'row',
    },
    separator: {
      height: '100%',
      width: 20,
    },
    tabTitle: {
      color: theme.colors.white,
    },
    titleContainer: {
      marginBottom: 20,
    },
    payment: {
      marginTop: 10,
    },
    total: {
      color: theme.colors.primary,
      fontFamily: 'Poppins-Bold',
    },
  });
  return (
    <View>
      <View style={style.titleContainer}>
        <Text>
          Choose your order to be eaten on the spot or delivered. and enjoy the
          various benefits of each choice.
        </Text>
      </View>
      <View style={style.boxContainer}>
        <TouchableOpacity
          onPress={() => setTabs('delivery')}
          style={[
            style.box,
            {
              backgroundColor: tabs?.includes('delivery')
                ? theme.colors.primary
                : theme.colors.background,
            },
          ]}>
          <MaterialIcons
            name="delivery-dining"
            size={50}
            color={
              tabs?.includes('delivery')
                ? theme.colors.white
                : theme.colors.primary
            }
          />

          <Text
            style={[
              style.tabTitle,
              {
                color: tabs?.includes('delivery')
                  ? theme.colors.white
                  : theme.colors.primary,
              },
            ]}>
            Delivery
          </Text>
        </TouchableOpacity>
        <View style={style.separator} />
        <TouchableOpacity
          onPress={() => setTabs('dine_in')}
          style={[
            style.box,
            {
              backgroundColor: tabs?.includes('dine_in')
                ? theme.colors.primary
                : theme.colors.background,
            },
          ]}>
          <MaterialIcons
            name="local-dining"
            size={50}
            color={
              tabs?.includes('dine_in')
                ? theme.colors.white
                : theme.colors.primary
            }
          />
          <Text
            style={[
              style.tabTitle,
              {
                color: tabs?.includes('dine_in')
                  ? theme.colors.white
                  : theme.colors.primary,
              },
            ]}>
            Dine in
          </Text>
        </TouchableOpacity>
      </View>
      <View style={style.payment}>
        <Text>
          Your total payment is{' '}
          <Text style={style.total}>{FormatCurrency(total)}</Text>
        </Text>
      </View>
    </View>
  );
}

export default CheckoutContent;
