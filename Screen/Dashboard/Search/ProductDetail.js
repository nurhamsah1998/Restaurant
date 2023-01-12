import React from 'react';
import {View, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';
import BottomSheetComponent from '../../../Component/Element/BottomSheetComponent';

import {theme} from '../../../App';
import CheckoutContent from './CheckoutContent';
import MyButton from '../../../Component/Element/MyButton';
import SugestionSection from './SugestionSection';

function ProductDetail(route) {
  const ref = React.useRef();
  const [tabs, setTabs] = React.useState('');
  const [visible, setVisible] = React.useState(false);
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
    navigate.navigate('RootDashboard', {screen: 'ProductDetail', params: {i}});
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
      <View>
        <SugestionSection
          onPressItem={onPressItem}
          handleFavorite={handleFavorite}
          isFavorite={isFavorite}
          navigate={navigate}
          setQuantity={setQuantity}
          quantity={quantity}
          params={route?.route?.params?.i}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingBottom: 10,
          position: 'absolute',
          bottom: 0,

          backgroundColor: theme.colors.white,
          // shadowColor: '#000',
          // elevation: 10,
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
