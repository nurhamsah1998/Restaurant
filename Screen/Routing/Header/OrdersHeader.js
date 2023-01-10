import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

import MyTextField from '../../../Component/Element/MyTextField';
import {theme} from '../../../App';
import Cart from './Cart';

function OrdersHeader() {
  const navigation = useNavigation();
  const [cart, setCart] = React.useState([]);
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

  /// stackoverflow Start
  /// question : https://stackoverflow.com/questions/60182942/useeffect-not-called-in-react-native-when-back-to-screen
  /// answer by Nitesh Tosniwal : https://stackoverflow.com/users/8663643/nitesh-tosniwal
  const isFocused = useIsFocused();
  React.useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [isFocused]);
  /// stackoverflow End
  return (
    <View
      style={{
        backgroundColor: theme.colors.primary,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        padding: 10,
        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <MyTextField fontSize={17} height={40} sx={{flex: 2, marginRight: 10}} />
      <View
        style={{
          flex: 1,
          height: 40,
          borderRadius: 20,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity>
          <AntDesign
            name="heart"
            style={{marginHorizontal: 15}}
            size={25}
            color={theme.colors.white}
          />
        </TouchableOpacity>
        <Cart
          onPress={() => navigation.navigate('CartList')}
          badge={cart?.length}
        />
      </View>
    </View>
  );
}

export default OrdersHeader;
