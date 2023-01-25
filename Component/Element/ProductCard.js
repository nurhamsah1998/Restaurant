import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text} from 'react-native-paper';

import {FormatCurrency} from '../../Component/FormatCurrency';
import {theme} from '../../App';

function ProductCard({data, keyExtractor, onPressItem}) {
  const {width} = Dimensions.get('window');
  return (
    <FlatList
      numColumns={2}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={<View style={{height: 80, width: '100%'}} />}
      data={data}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            onPress={() => onPressItem(item)}
            style={{
              margin: 5,
              marginTop: 10,
              paddingBottom: 10,
            }}>
            <Image
              source={{uri: item.imgLink}}
              style={{width: width / 2.21, height: 150, borderRadius: 5}}
            />
            <View style={{marginTop: 5, paddingBottom: 5}}>
              <Text variant="bodyLarge">{item.label}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10,
                  }}>
                  <AntDesign
                    name="star"
                    size={15}
                    color={theme.colors.primary}
                  />
                  <Text style={{marginLeft: 2, color: theme.colors.primary}}>
                    {`${item.review} Review`}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <AntDesign
                    name="clockcircle"
                    size={15}
                    color={theme.colors.primary}
                  />
                  <Text style={{marginLeft: 2, color: theme.colors.primary}}>
                    {item.duration || '5 min'}
                  </Text>
                </View>
              </View>
              <Text
                variant="titleLarge"
                style={{marginTop: 10, fontWeight: '700'}}>
                {FormatCurrency(item.price)}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
      keyExtractor={keyExtractor}
    />
  );
}

export default ProductCard;
