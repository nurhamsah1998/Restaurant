import React from 'react';
import {View, FlatList, Image} from 'react-native';
import {Text} from 'react-native-paper';

import {FormatCurrency} from '../../../../Component/FormatCurrency';
import {theme} from '../../../../App';
import MyButton from '../../../../Component/Element/MyButton';

function index() {
  const cartItem = [
    {
      label: 'Burger BorBar',
      price: 2000,
      quantity: 2,
      variant: 'adding more tacos on top',
      imgLink:
        'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Pizza ',
      price: 1200,
      quantity: 2,
      variant: 'put meal into peaceas',
      imgLink:
        'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Pizza Elimination',
      price: 1200,
      quantity: 2,
      variant: 'put meal into peaceas',
      imgLink:
        'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Pizza1 ',
      price: 1200,
      quantity: 2,
      variant: 'put meal into peaceas',
      imgLink:
        'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Pizza Eliminatio1n',
      price: 1200,
      quantity: 2,
      variant: 'put meal into peaceas',
      imgLink:
        'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
  return (
    <View style={{paddingBottom: 100}}>
      <FlatList
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                borderRadius: 20,
                padding: 10,
              }}>
              <View
                style={{
                  elevation: 5,
                  backgroundColor: theme.colors.background,
                  shadowColor: '#000',
                  borderRadius: 20,
                }}>
                <Image
                  source={{uri: item.imgLink}}
                  resizeMode="cover"
                  style={{height: 120, width: 120, borderRadius: 20}}
                />
              </View>
              <View
                style={{
                  marginLeft: 10,
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text variant="headlineSmall">{item.label}</Text>
                  <Text style={{fontSize: 17, color: theme.colors.backdrop}}>
                    {item.variant}
                  </Text>
                  <Text style={{fontSize: 15}}>
                    {FormatCurrency(item.price)} x {item.quantity}
                  </Text>
                </View>
                <Text
                  variant="headlineSmall"
                  style={{color: theme.colors.primary}}>
                  {FormatCurrency(item.price * item.quantity)}
                </Text>
              </View>
            </View>
          );
        }}
        data={cartItem}
        keyExtractor={item => item.label}
      />
      <MyButton title="Checkout" />
    </View>
  );
}

export default index;
