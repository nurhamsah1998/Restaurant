import React from 'react';
import {View, FlatList, Image} from 'react-native';
import {Text} from 'react-native-paper';

import ListProduct from '../../../../Component/Element/ListProduct';
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
      <ListProduct data={cartItem} />
      <MyButton title="Checkout" />
    </View>
  );
}

export default index;
