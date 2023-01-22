import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import ListProduct from '../../../../Component/Element/ListProduct';
import {theme} from '../../../../App';

function Index({isEmptyCart, totalAmountCart, cart}) {
  const navigation = useNavigation();
  const {height} = Dimensions.get('window');
  return (
    <View style={{paddingBottom: 0, height: height / 1.2}}>
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
