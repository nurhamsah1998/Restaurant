import React from 'react';
import {View, FlatList, Image, Dimensions, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {theme} from '../../../App';
import {FormatCurrency} from '../../../Component/FormatCurrency';
import IconContained from '../../../Component/Element/IconContained';
import MyButton from '../../../Component/Element/MyButton';

function ProductDetail(route) {
  const navigate = useNavigation();
  const {label, images, review, duration, desc, price} =
    route?.route?.params?.i;
  const {width} = Dimensions.get('window');
  const [quantity, setQuantity] = React.useState(1);
  const [cart, setCart] = React.useState([]);

  const onAddCart = async () => {
    const clone = [...cart];
    const body = {...route?.route?.params?.i, quantity, tota: price * quantity};
    clone.push(body);
    const jsonValue = JSON.stringify(clone);
    await AsyncStorage.setItem('@cart', jsonValue).then(res => {
      navigate.goBack();
    });
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@cart');
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        setCart(jsonValue || []);
        // navigation.navigate('Dashboard');
      } else {
        setCart([]);
        // navigation.navigate('AuthRouteStack');
      }
    } catch (e) {
      // error reading value
    }
  };
  React.useEffect(() => {
    getData();
  }, []);

  console.log(cart, 'OOOO');
  return (
    <View style={{flex: 1}}>
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
            <IconContained onPress={() => navigate.goBack()} icon="back" />
            <IconContained icon="sharealt" iconColor={theme.colors.primary} />
          </View>
        </View>
        <View
          style={{
            padding: 20,
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
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                marginTop: 10,
              }}>
              <Text variant="headlineSmall" style={{fontWeight: '600'}}>
                {FormatCurrency(price * quantity)}
              </Text>
              {/* <Text style={{color: theme.colors.backdrop}}>/porsi</Text> */}
            </View>
            <View style={{flexDirection: 'row'}}>
              <MyButton
                disabled={quantity <= 1}
                onPress={() => setQuantity(quantity - 1)}
                small
                mode="contained"
                title="-"
              />
              <View
                style={{
                  borderColor: theme.colors.backdrop,
                  borderWidth: 1,
                  borderRadius: 5,
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 20}}>{quantity}</Text>
              </View>
              <MyButton
                onPress={() => setQuantity(quantity + 1)}
                small
                title="+"
                mode="contained"
              />
            </View>
          </View>
          <Text style={{marginTop: 20}} variant="titleLarge">
            {desc}
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          backgroundColor: theme.colors.white,
          shadowColor: '#000',
          elevation: 10,
        }}>
        <MyButton
          title="Add to cart"
          onPress={onAddCart}
          sx={{marginRight: 20}}
        />
        <MyButton title="Checkout" sx={{flex: 1}} mode="contained" />
      </View>
    </View>
  );
}

export default ProductDetail;
