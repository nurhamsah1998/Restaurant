import React from 'react';
import {View, Alert} from 'react-native';
import {Text, Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyButton from '../../../Component/Element/MyButton';
import DineIn from './DineIn';
import Delivery from './Delivery';
import {theme} from '../../../App';

function CartList() {
  const [tabs, setTabs] = React.useState(0);
  const [cart, setCart] = React.useState([]);
  const totalAmountCart =
    cart?.length <= 0 ? 0 : cart?.map(i => i?.total).reduce((a, b) => a + b);
  const isEmptyCart = cart?.length <= 0;
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
  return (
    <View style={{flex: 1, padding: 20, backgroundColor: theme.colors.white}}>
      <View style={{flexDirection: 'row'}}>
        <MyButton
          onPress={() => setTabs(0)}
          sx={{flex: 1}}
          mode={tabs === 0 ? 'contained' : 'outlined'}
          title="Delivery"
        />
        <MyButton
          onPress={() => setTabs(1)}
          sx={{flex: 1}}
          mode={tabs === 1 ? 'contained' : 'outlined'}
          title="Dine In"
        />
      </View>
      <View
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
          textColor={theme.colors.white}
          mode="contained"
          buttonColor={theme.colors.error}>
          Clear all
        </Button>
      </View>
      <View style={{flex: 1}}>
        {[
          {
            id: 0,
            component: (
              <Delivery
                cart={cart}
                isEmptyCart={isEmptyCart}
                totalAmountCart={totalAmountCart}
              />
            ),
          },
          {id: 1, component: <DineIn />},
        ].map((x, y) => (
          <View key={y} style={{display: y === tabs ? 'flex' : 'none'}}>
            {x.component}
          </View>
        ))}
      </View>
    </View>
  );
}

export default CartList;
