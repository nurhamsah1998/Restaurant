import React from 'react';
import {View, Alert} from 'react-native';
import {Text, Button, ActivityIndicator} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MyButton from '../../../Component/Element/MyButton';
import DineIn from './DineIn';
import Items from './Items';
import {theme} from '../../../App';
import HeaderBack from '../../../Component/Element/HeaderBack';

function CartList() {
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
  return (
    <View style={{flex: 1, padding: 10, backgroundColor: theme.colors.white}}>
      <HeaderBack title="Cart" />
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 10,
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
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
    </View>
  );
}

export default CartList;
