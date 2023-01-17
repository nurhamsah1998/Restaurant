import React from 'react';
import {View, Dimensions, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import BottomSheetComponent from '../../../Component/Element/BottomSheetComponent';
import {theme} from '../../../App';
import IconContained from '../../../Component/Element/IconContained';
import CheckoutContent from './CheckoutContent';
import MyButton from '../../../Component/Element/MyButton';
import SugestionSection from './SugestionSection';
import BannerImageCarousel from '../HomeScreen/Banner';
import {data, sectionData} from '../../../mockup';
import {FormatCurrency} from '../../../Component/FormatCurrency';

function ProductDetail(route) {
  const [tabs, setTabs] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [offside, setOffside] = React.useState({x: 0, y: 0});
  const [cart, setCart] = React.useState([]);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const navigate = useNavigation();
  const {label, images, review, duration, desc, price} =
    route?.route?.params?.i;
  const {width} = Dimensions.get('window');
  const [quantity, setQuantity] = React.useState(1);
  const onAddCart = async () => {
    Snackbar.show({
      text: 'Successfully added to cart',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: theme.colors.primary,
    });
    const clone = [...cart];
    const body = {
      ...route?.route?.params?.i,
      quantity,
      total: price * quantity,
    };
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

  const onPressSubmit = async () => {
    const body = {
      ...route?.route?.params?.i,
      quantity,
      total: price * quantity,
      status: 'unpaid',
      type: tabs,
    };
    const data = JSON.stringify(body);
    await AsyncStorage.setItem('@orders', data).then(res => {
      navigate.navigate('RootDashboard', {
        screen: 'Orders',
        params: body,
      });
    });
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    Snackbar.show({
      text: 'Successfully added to your fovorite list',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: theme.colors.primary,
    });
  };
  const onPressItem = i => {
    setOffside(prevValue => {
      if (Boolean(prevValue.y)) {
        return {x: 0, y: 0};
      }
      return {x: 0, y: 1};
    });
    navigate.navigate('RootDashboard', {screen: 'ProductDetail', params: {i}});
    // setOffside({x: 0, y: 0});
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <BottomSheetComponent
        title="Choose Orders"
        content={
          <CheckoutContent
            tabs={tabs}
            total={price * quantity}
            setTabs={setTabs}
          />
        }
        isVisible={visible}
        disabledOnSubmit={!Boolean(tabs)}
        submitTitle="Checkout"
        onDismiss={() => {
          setVisible(false);
          setTabs(null);
        }}
        onPressSubmit={onPressSubmit}
      />
      <GestureHandlerRootView>
        <ScrollView contentOffset={offside}>
          <BannerImageCarousel data={data} />
          <View
            style={{
              position: 'absolute',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width,
              padding: 10,
            }}>
            <IconContained onPress={() => navigate.goBack()} icon="left" />
            <IconContained
              onPress={handleFavorite}
              icon={isFavorite ? 'heart' : 'hearto'}
              iconColor={theme.colors.primary}
            />
          </View>
          <View
            style={{
              padding: 10,
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
              marginTop: -20,
              backgroundColor: theme.colors.white,
              width: '100%',
              height: '100%',
            }}>
            <Text variant="headlineMedium" style={{}}>
              {label}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
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
                }}>
                <Text variant="headlineSmall" style={{}}>
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
            <Text style={{marginTop: 20}}>{desc}</Text>
            <SugestionSection onPressItem={onPressItem} />
          </View>
        </ScrollView>
      </GestureHandlerRootView>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingVertical: 5,
          position: 'absolute',
          bottom: 0,
          backgroundColor: theme.colors.white,
          borderTopColor: theme.colors.divider,
          borderTopWidth: 1,
        }}>
        <MyButton
          title="Add to cart"
          onPress={onAddCart}
          sx={{marginRight: 20}}
        />
        <MyButton
          onPress={() => setVisible(true)}
          title="Checkout"
          sx={{flex: 1}}
          mode="contained"
        />
      </View>
    </View>
  );
}

export default ProductDetail;
