import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text} from 'react-native-paper';

import {theme} from '../../App';

function ProductCard({data, keyExtractor}) {
  const {width} = Dimensions.get('window');
  return (
    <FlatList
      numColumns={2}
      data={data}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={{
              margin: 5,
              marginTop: 10,
              borderBottomColor: theme.colors.divider,
              borderBottomWidth: 1,
            }}>
            <View
              style={{
                width: width / 2.21,
                height: 150,
                elevation: 5,
                shadowColor: '#000',
                backgroundColor: theme.colors.white,
                borderRadius: 20,
              }}>
              <ImageBackground
                source={{uri: item.imgLink}}
                /// stackoverflow START
                /// question : https://stackoverflow.com/questions/49442165/how-do-you-add-borderradius-to-imagebackground
                /// answer by GollyJer : https://stackoverflow.com/users/25197/gollyjer
                imageStyle={{
                  borderRadius: 20,
                }}
                /// stackoverflow END
                style={{width: '100%', height: 150}}
              />
            </View>
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
                {item.price}
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
