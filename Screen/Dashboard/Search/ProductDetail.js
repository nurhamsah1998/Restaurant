import React, {useRef} from 'react';
import {View, Dimensions, ScrollView, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';
import AntDesign from 'react-native-vector-icons/AntDesign';

import BottomSheetScrollViewComponent from '../../../Component/Element/BottomSheetScrollViewComponent';
import {theme} from '../../../App';
import Cart from '../../Routing/Header/Cart';
import IconContained from '../../../Component/Element/IconContained';
import MyButton from '../../../Component/Element/MyButton';
import SugestionSection from './SugestionSection';
import BannerImageCarousel from '../HomeScreen/Banner';
import {data} from '../../../mockup';
import CheckoutContent from './CheckoutContent';
import {FormatCurrency} from '../../../Component/FormatCurrency';

const ProductDetail = route => {
  const sheetRef = useRef(null);
  // hooks
  const [tabs, setTabs] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [orders, setOrders] = React.useState([]);
  const [offside, setOffside] = React.useState({x: 0, y: 0});
  const [cart, setCart] = React.useState([]);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const navigate = useNavigation();
  const {label, images, review, duration, desc, price} =
    route?.route?.params?.i;
  console.log(route?.route?.params?.i, '<===');
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
      const valueOrders = await AsyncStorage.getItem('@orders');
      if (value !== null || valueOrders !== null) {
        const jsonValue = JSON.parse(value);
        const jsonValueOrders = JSON.parse(valueOrders);
        setTimeout(() => {
          setLoading(false);
          setCart(jsonValue || []);
          setOrders(jsonValueOrders || []);
        }, 2000);
      } else {
        setCart([]);
        // navigation.navigate('AuthRouteStack');
      }
    } catch (e) {
      // error reading value
    }
  };

  const randomNUm = Math.floor(Math.random() * 999 + 1);
  const onPressSubmit = async () => {
    const clone = [...orders];
    const currentItem = {
      ...route?.route?.params?.i,
      quantity,
      total: quantity * price,
    };
    const body = {
      items: [currentItem],
      createdAt: new Date().toISOString(),
      expiredAt: '01:34:00',
      id: randomNUm + 1,
      type: tabs,
      invoice: `ORDER - INV${1998}`,
      total: price * quantity,
      status: 'unpaid',
    };
    clone.push(body);
    const data = JSON.stringify(clone);
    await AsyncStorage.setItem('@orders', data)
      .then(async res => {
        navigate.navigate('RootDashboard', {
          screen: 'OrdersDetails',
          params: {body, backPath: {parent: 'Dashboard', child: 'Search'}},
        });
      })
      .catch(error => {
        console.log(error, 'Error');
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

  const MemoSugestion = React.useMemo(
    () => <SugestionSection onPressItem={onPressItem} />,
    [],
  );

  const style = StyleSheet.create({
    topIconContained: {
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width,
      padding: 10,
    },
    topIcon: {flexDirection: 'row'},
    body: {
      padding: 10,
      borderTopEndRadius: 20,
      borderTopStartRadius: 20,
      marginTop: -20,
      backgroundColor: theme.colors.white,
      width: '100%',
      height: '100%',
    },
    firstSection: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
    },
    starIconContained: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
    },
    titleIcon: {marginLeft: 2, color: theme.colors.primary},
    clockIconContained: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    price: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    btnCounter: {flexDirection: 'row'},
    valueCounter: {
      borderColor: theme.colors.backdrop,
      borderWidth: 1,
      borderRadius: 5,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    quantity: {fontSize: 20},
    desc: {marginTop: 20},
    bottomButton: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 5,
      position: 'absolute',
      bottom: 0,
      backgroundColor: theme.colors.white,
      borderTopColor: theme.colors.divider,
      borderTopWidth: 1,
    },
  });

  return (
    <BottomSheetScrollViewComponent
      title="Choose Order Type"
      sheetRef={sheetRef}
      onPressSubmit={onPressSubmit}
      submitLabel="Checkout"
      cancelLabel="Cancel"
      triggerCallBack={tabs}
      content={
        <CheckoutContent
          tabs={tabs}
          total={price * quantity}
          setTabs={setTabs}
        />
      }>
      <View>
        <ScrollView contentOffset={offside}>
          <BannerImageCarousel data={images} />
          <View style={style.topIconContained}>
            <IconContained
              onPress={() => navigate.goBack()}
              icon="arrow-back"
            />
            <View style={style.topIcon}>
              <IconContained
                sx={{marginRight: 15}}
                onPress={() => navigate.navigate('CartList')}
                icon="shopping-cart"
                iconColor={theme.colors.primary}
              />
              <IconContained
                onPress={handleFavorite}
                icon={isFavorite ? 'favorite' : 'favorite-border'}
                iconColor={theme.colors.primary}
              />
            </View>
          </View>
          <View style={style.body}>
            <Text variant="headlineMedium">{label}</Text>
            <View style={style.firstSection}>
              <View style={style.starIconContained}>
                <AntDesign name="star" size={20} color={theme.colors.primary} />
                <Text variant="titleMedium" style={style.titleIcon}>
                  {`${review} Review`}
                </Text>
              </View>
              <View style={style.clockIconContained}>
                <AntDesign
                  name="clockcircle"
                  size={20}
                  color={theme.colors.primary}
                />
                <Text variant="titleMedium" style={style.titleIcon}>
                  {duration || '5 min'}
                </Text>
              </View>
            </View>
            <View style={style.contentContainer}>
              <View style={style.price}>
                <Text variant="headlineSmall" style={{}}>
                  {FormatCurrency(price * quantity)}
                </Text>
              </View>
              <View style={style.btnCounter}>
                <MyButton
                  disabled={quantity <= 1}
                  onPress={() => setQuantity(prev => prev - 1)}
                  small
                  mode="contained"
                  title="-"
                />
                <View style={style.valueCounter}>
                  <Text style={style.quantity}>{quantity}</Text>
                </View>
                <MyButton
                  onPress={() => setQuantity(prev => prev + 1)}
                  small
                  title="+"
                  mode="contained"
                />
              </View>
            </View>
            <Text style={style.desc}>{desc}</Text>
            {MemoSugestion}
          </View>
        </ScrollView>
        <View style={style.bottomButton}>
          <MyButton
            title="Add to cart"
            onPress={onAddCart}
            sx={{marginRight: 20}}
          />
          <MyButton
            onPress={() => sheetRef.current?.snapToIndex(1)}
            title="Checkout"
            sx={{flex: 1}}
            mode="contained"
          />
        </View>
      </View>
    </BottomSheetScrollViewComponent>
  );
};

export default ProductDetail;
