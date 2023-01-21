import React from 'react';
import {View, FlatList, Image, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import ListProduct from '../../../../Component/Element/ListProduct';
import {FormatCurrency} from '../../../../Component/FormatCurrency';
import MyButton from '../../../../Component/Element/MyButton';
import {theme} from '../../../../App';
import BottomSheetComponent from '../../../../Component/Element/BottomSheetComponent';
import CheckoutContent from '../../Search/CheckoutContent';

function Index({isEmptyCart, totalAmountCart, cart}) {
  const totalPriceCart =
    cart?.length <= 0 ? 0 : cart?.map(i => i?.price)?.reduce((x, y) => x + y);
  const navigation = useNavigation();
  const [tabs, setTabs] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const randomNUm = Math.floor(Math.random * 999 + 1);
  const {height} = Dimensions.get('window');
  const onPressSubmit = async () => {
    const body = {
      items: cart,
      createdAt: new Date().toISOString(),
      expiredAt: '01:34:00',
      id: 1,
      type: tabs,
      invoice: `ORDER - INV${1}`,
      total: totalPriceCart,
      status: 'unpaid',
    };
    const data = JSON.stringify(body);
    await AsyncStorage.setItem('@orders', data)
      .then(res => {
        navigation.navigate('RootDashboard', {
          screen: 'Orders',
          params: body,
        });
      })
      .catch(error => {
        console.log(error, 'ooo');
      });
  };
  return (
    <View style={{paddingBottom: 0, height: height / 1.2}}>
      <BottomSheetComponent
        title="Choose Orders"
        content={
          <CheckoutContent
            tabs={tabs}
            total={totalPriceCart}
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
      {isEmptyCart ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <View>
            <Text
              variant="headlineMedium"
              style={{color: theme.colors.backdrop, textAlign: 'center'}}>
              Your cart is empty
            </Text>
            <Text
              variant="titleMedium"
              style={{color: theme.colors.backdrop, textAlign: 'center'}}>
              find the food that suits you{' '}
              <Text
                onPress={() => navigation.navigate('Search')}
                style={{color: theme.colors.primary, fontWeight: 'bold'}}>
                here!
              </Text>
            </Text>
          </View>
        </View>
      ) : (
        <ListProduct data={cart} />
      )}
    </View>
  );
}

export default Index;
