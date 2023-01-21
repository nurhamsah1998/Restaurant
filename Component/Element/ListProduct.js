import React from 'react';
import {View, FlatList, Image} from 'react-native';
import {Text, IconButton} from 'react-native-paper';

import {FormatCurrency} from '../FormatCurrency';
import {theme} from '../../App';
import IconContained from './IconContained';

function ListProduct({data}) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={<View style={{height: 20}} />}
      ListFooterComponent={<View style={{height: 80, width: '100%'}} />}
      renderItem={({item, index}) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              borderRadius: 20,
              marginTop: index === 0 ? 10 : 0,
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
                style={{height: 100, width: 100, borderRadius: 20}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  marginLeft: 10,
                }}>
                <View>
                  <Text variant="titleMedium">{item.label}</Text>
                  <Text style={{fontSize: 17, color: theme.colors.backdrop}}>
                    {item.variant || '-'}
                  </Text>
                  <Text style={{fontSize: 14, color: theme.colors.backdrop}}>
                    {FormatCurrency(item.price)} x {item.quantity}
                  </Text>
                </View>
                <Text
                  variant="titleMedium"
                  style={{color: theme.colors.primary}}>
                  {FormatCurrency(item.price * item.quantity)}
                </Text>
              </View>
              <IconContained
                backgroundColor={theme.colors.error}
                size={40}
                icon="delete"
                iconColor={theme.colors.white}
              />
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
