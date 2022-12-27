import React from 'react';
import {View, FlatList, Image, Dimensions, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {theme} from '../../../App';
import IconContained from '../../../Component/Element/IconContained';
import MyButton from '../../../Component/Element/MyButton';

function ProductDetail(route) {
  const {label, images, review, duration, desc, price} =
    route?.route?.params?.i;
  const {width} = Dimensions.get('window');
  return (
    <ScrollView>
      <View style={{position: 'relative'}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          data={images}
          keyExtractor={item => item.imgLink}
          renderItem={({item, index}) => {
            return (
              <Image
                source={{uri: item.imgLink}}
                resizeMode="cover"
                style={{width: width, height: 300}}
              />
            );
          }}
        />
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: width,
            padding: 20,
          }}>
          <IconContained icon="back" />
          <IconContained icon="sharealt" iconColor={theme.colors.primary} />
        </View>
      </View>
      <View
        style={{
          padding: 10,
          backgroundColor: '#fff',
          borderRadius: 20,
          marginTop: -20,
        }}>
        <Text variant="headlineLarge" style={{fontWeight: '700'}}>
          {label}
        </Text>
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
            <AntDesign name="star" size={20} color={theme.colors.primary} />
            <Text
              variant="titleMedium"
              style={{marginLeft: 2, color: theme.colors.primary}}>
              {`${review} Review`}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <AntDesign
              name="clockcircle"
              size={20}
              color={theme.colors.primary}
            />
            <Text
              variant="titleMedium"
              style={{marginLeft: 2, color: theme.colors.primary}}>
              {duration || '5 min'}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
            justifyContent: 'space-between',
          }}>
          <Text
            variant="headlineLarge"
            style={{fontWeight: '700', marginTop: 20}}>
            {price}
          </Text>
          <MyButton title="Checkout" mode="contained" />
        </View>
        <Text style={{marginTop: 20}} variant="titleLarge">
          {desc}
        </Text>
      </View>
    </ScrollView>
  );
}

export default ProductDetail;
