import React from 'react';

import {View, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Text} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {theme} from '../../../App';

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

  const style = StyleSheet.create({
    container: {backgroundColor: theme.colors.white},
    body: {
      backgroundColor: theme.colors.primary,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      padding: 10,
      paddingHorizontal: 10,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    containerContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    content: {flexDirection: 'row', alignItems: 'center'},
    avatar: {
      padding: 3,
      backgroundColor: theme.colors.white,
      borderRadius: 100,
    },
    titleName: {
      fontSize: 17,
      color: theme.colors.white,
      marginLeft: 10,
    },
    titleBadge: {
      fontSize: 16,
      color: theme.colors.white,
      marginLeft: 10,
      marginTop: -8,
      fontFamily: 'Poppins-Bold',
    },
  });

  return (
    <View style={style.container}>
      <View style={style.body}>
        <View style={style.containerContent}>
          <View style={style.content}>
            <View style={style.avatar}>
              <Avatar.Image
                size={40}
                source={require('../../../Component/Asset/profile.jpg')}
              />
            </View>
            <View>
              <Text style={style.titleName}>Hello, Nurhamsah</Text>
              <Text style={style.titleBadge}>Gold Badge</Text>
            </View>
          </View>
          <TouchableOpacity>
            <MaterialIcons
              name="notifications"
              size={30}
              color={theme.colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default DashboardHeader;
