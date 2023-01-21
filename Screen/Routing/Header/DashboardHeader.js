import React from 'react';

import {View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Text} from 'react-native-paper';

import {theme} from '../../../App';
import Cart from './Cart';

function DashboardHeader() {
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
    <View style={{backgroundColor: theme.colors.white}}>
      <View
        style={{
          backgroundColor: theme.colors.primary,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          padding: 10,
          paddingHorizontal: 10,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              padding: 3,
              backgroundColor: theme.colors.white,
              borderRadius: 100,
            }}>
            <Avatar.Image
              size={40}
              source={require('../../../Component/Asset/profile.jpg')}
            />
          </View>
          <View>
            <Text
              style={{fontSize: 20, color: theme.colors.white, marginLeft: 10}}>
              Hello, Nurhamsah
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: theme.colors.white,
                marginLeft: 10,
                marginTop: -8,
                fontFamily: 'Poppins-Bold',
              }}>
              Gold Badge
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default DashboardHeader;
