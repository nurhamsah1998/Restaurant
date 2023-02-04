import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import HeaderBack from '../../../../Component/Element/HeaderBack';
import ListProduct from '../../../../Component/Element/ListProduct';
import {theme} from '../../../../App';

function FavoriteList() {
  const navigation = useNavigation();
  const style = StyleSheet.create({
    headerBack: {
      paddingHorizontal: 10,
    },
    container: {
      backgroundColor: theme.colors.white,
      flex: 1,
    },
    title: {
      marginHorizontal: 10,
    },
  });
  const tes = new Array(4).fill({
    images: [[Object], [Object], [Object]],
    imgLink:
      'https://images.pexels.com/photos/2983104/pexels-photo-2983104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isDeliver: true,
    isDineIn: true,
    label: 'Bread',
    price: 2500,
    quantity: 1,
    review: '6.7k',
    total: 2500,
  });
  return (
    <View style={style.container}>
      <View style={style.headerBack}>
        <HeaderBack onPressBack={() => navigation.goBack()} title="Favorite" />
      </View>
      <Text style={style.title}>FavoriteList</Text>
      <ListProduct
        bottom={10}
        data={tes}
        cancelButtonLabel="Remove"
        submitButtonLabel="Order"
        isFavorite
      />
    </View>
  );
}

export default FavoriteList;
