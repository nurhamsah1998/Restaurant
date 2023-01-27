import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Badge} from 'react-native-paper';
import {theme} from '../../../App';

function Cart({badge = 0, onPress}) {
  const style = StyleSheet.create({
    main: {
      display: badge <= 0 ? 'none' : 'flex',
      position: 'absolute',
      zIndex: 2,
      top: -13,
      right: -13,
    },
  });
  return (
    <TouchableOpacity onPress={onPress}>
      <Badge children={badge} style={style.main} />
      <Entypo name="shopping-cart" size={25} color={theme.colors.white} />
    </TouchableOpacity>
  );
}

export default Cart;
