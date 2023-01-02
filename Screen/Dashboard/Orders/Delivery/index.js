import React from 'react';
import {View, FlatList, Image} from 'react-native';
import {Text} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import ListProduct from '../../../../Component/Element/ListProduct';
import {FormatCurrency} from '../../../../Component/FormatCurrency';
import MyButton from '../../../../Component/Element/MyButton';
import {theme} from '../../../../App';

function Index({isEmptyCart, totalAmountCart, cart}) {
  const navigation = useNavigation();
  return (
    <View style={{paddingBottom: 100, height: '100%'}}>
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

      <MyButton
        sx={{position: 'absolute', bottom: 20, right: 0, left: 0}}
        mode="contained"
        title={`Checkout ${FormatCurrency(totalAmountCart)}`}
      />
    </View>
  );
}

export default Index;
