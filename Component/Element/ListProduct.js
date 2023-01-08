import React from 'react';
import {View, FlatList, Image} from 'react-native';
import {Text} from 'react-native-paper';

import {FormatCurrency} from '../FormatCurrency';
import {theme} from '../../App';

function ListProduct({data}) {
  return (
    <FlatList
      renderItem={({item, index}) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              borderRadius: 20,
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
                style={{color: theme.colors.primary, fontWeight: 'bold'}}>
                {FormatCurrency(item.price * item.quantity)}
              </Text>
            </View>
          </View>
        );
      }}
      data={data}
      keyExtractor={item => item.label}
    />
  );
}

export default ListProduct;
