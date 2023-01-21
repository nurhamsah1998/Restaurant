import React from 'react';
import {View, Alert} from 'react-native';
import {Text, Button, ActivityIndicator} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import BottomSheetScrollViewComponent from '../../../Component/Element/BottomSheetScrollViewComponent';
import Items from './Items';
import CheckoutContent from '../Search/CheckoutContent';
import {theme} from '../../../App';
import HeaderBack from '../../../Component/Element/HeaderBack';
import MyButton from '../../../Component/Element/MyButton';

function CartList() {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(true);
  const [cart, setCart] = React.useState([]);
  const totalAmountCart =
    cart?.length <= 0 ? 0 : cart?.map(i => i?.total).reduce((a, b) => a + b);
  const isEmptyCart = cart?.length <= 0;
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@cart');
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        setTimeout(() => {
          setLoading(false);
          setCart(jsonValue || []);
        }, 2000);
      } else {
        setTimeout(() => {
          setLoading(false);
          setCart([]);
        }, 2000);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
      // error reading value
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  const sheetRef = React.useRef(null);
  return (
    <BottomSheetScrollViewComponent
      title="Choose Order Type"
      sheetRef={sheetRef}
      submitLabel="Checkout"
      cancelLabel="Cancel"
      content={<CheckoutContent />}>
      <View
        style={{
          paddingHorizontal: 10,
          flex: 1,
          backgroundColor: theme.colors.white,
        }}>
        <HeaderBack onPressBack={() => navigation.goBack()} title="Cart" />
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18}}>Upcoming Orders</Text>
          <Button
            disabled={isEmptyCart}
            onPress={async () =>
              Alert.alert(
                'Are you sure you want to delete?',
                'all your shopping cart will be removed from the cart list.',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'OK',
                    onPress: async () => {
                      await AsyncStorage.removeItem('@cart');
                      getData();
                    },
                  },
                ],
              )
            }
            textColor={theme.colors.error}
            mode="text">
            Clear all
          </Button>
        </View>
        <View style={{flex: 1}}>
          {loading ? (
            <View
              style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <ActivityIndicator
                animating={true}
                color={theme.colors.primary}
                size={50}
              />
              <Text style={{marginTop: 20}}>Please wait</Text>
            </View>
          ) : (
            <Items
              cart={cart}
              isEmptyCart={isEmptyCart}
              totalAmountCart={totalAmountCart}
            />
          )}
        </View>
        <View
          style={{
            backgroundColor: theme.colors.white,
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            flex: 1,
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}>
          <MyButton
            disabled={cart?.length <= 0}
            mode="contained"
            onPress={() => sheetRef.current?.snapToIndex(1)}
            title={`Checkout`}
          />
        </View>
      </View>
    </BottomSheetScrollViewComponent>
  );
}

export default CartList;
