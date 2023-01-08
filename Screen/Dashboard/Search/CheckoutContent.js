import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {theme} from '../../../App';

function CheckoutContent({tabs, setTabs}) {
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
          onPress={() => setTabs(1)}
          style={[
            style.box,
            {
              backgroundColor:
                tabs === 1 ? theme.colors.primary : theme.colors.background,
            },
          ]}>
          <MaterialIcons
            name="delivery-dining"
            size={50}
            color={tabs === 1 ? theme.colors.white : theme.colors.primary}
          />
          <Text
            style={[
              style.tabTitle,
              {color: tabs === 1 ? theme.colors.white : theme.colors.primary},
            ]}>
            Delivery
          </Text>
        </TouchableOpacity>
        <View style={style.separator} />
        <TouchableOpacity
          onPress={() => setTabs(2)}
          style={[
            style.box,
            {
              backgroundColor:
                tabs === 2 ? theme.colors.primary : theme.colors.background,
            },
          ]}>
          <Ionicons
            name="fast-food-outline"
            size={50}
            color={tabs === 2 ? theme.colors.white : theme.colors.primary}
          />
          <Text
            style={[
              style.tabTitle,
              {color: tabs === 2 ? theme.colors.white : theme.colors.primary},
            ]}>
            Dine in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CheckoutContent;
