import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Text} from 'react-native-paper';

import {FormatCurrency} from '../../Component/FormatCurrency';
import {theme} from '../../App';
import {ScrollView} from 'react-native-gesture-handler';

export const SingleProductCard = ({onPress, data}) => {
  const {width} = Dimensions.get('window');
  const item = data;
  const style = StyleSheet.create({
    touchableOpacity: {
      margin: Math.round(width) > 393 ? 5 : 2,
      // marginTop: 10,
      paddingBottom: 10,
      width: width / 2.21,
    },
    imageBackground: {
      backgroundColor: theme.colors.divider,
      borderRadius: 10,
      // shadowColor: '#000',
      // elevation: 5,
    },
    image: {
      width: width / 2.21,
      height: 150,
      borderRadius: 10,
    },
    container: {marginTop: 5, paddingBottom: 5},
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    starIconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
    },
    fisrtTitleIcon: {
      marginLeft: 2,
      color: theme.colors.primary,
    },
    clockIconContainer: {flexDirection: 'row', alignItems: 'center'},
    orderType: {flexDirection: 'row', alignItems: 'center'},
    price: {marginTop: 10},
  });
  return (
    <TouchableOpacity onPress={onPress} style={style.touchableOpacity}>
      <ImageBackground
        source={require('../../Component/Asset/RG.png')}
        resizeMode="center"
        style={style.imageBackground}>
        <Image source={{uri: item.imgLink}} style={style.image} />
      </ImageBackground>

      <View style={style.container}>
        <Text variant="bodyLarge">{item.label}</Text>
        <Text variant="titleLarge" style={style.price}>
          {FormatCurrency(item.price)}
        </Text>
        <View style={style.iconContainer}>
          <View style={style.starIconContainer}>
            <AntDesign name="star" size={15} color={theme.colors.primary} />
            <Text style={style.fisrtTitleIcon}>{`${item.review} Review`}</Text>
          </View>
          <View style={style.clockIconContainer}>
            <AntDesign
              name="clockcircle"
              size={15}
              color={theme.colors.primary}
            />
            <Text style={style.fisrtTitleIcon}>{item.duration || '5 min'}</Text>
          </View>
        </View>
        <View style={style.iconContainer}>
          {item?.isDeliver ? (
            <View style={style.starIconContainer}>
              <MaterialIcons
                name="delivery-dining"
                size={20}
                style={style.orderType}
                color={theme.colors.primary}
              />
              <Text>Delivery</Text>
            </View>
          ) : null}
          {item?.isDineIn ? (
            <View style={style.starIconContainer}>
              <MaterialIcons
                name="local-dining"
                size={20}
                style={style.orderType}
                color={theme.colors.primary}
              />
              <Text>Dine in</Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

function ProductCard({data, onPressItem}) {
  const {width} = Dimensions.get('window');
  const style = StyleSheet.create({
    listFooterComponent: {height: 80, width: '100%'},
  });
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {data?.map((item, index) => {
          return (
            <SingleProductCard
              key={index}
              onPress={() => onPressItem(item)}
              data={item}
            />
          );
        })}
      </View>
      <View style={style.listFooterComponent} />
    </ScrollView>
  );
}

export default ProductCard;
