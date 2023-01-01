import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyTextField from '../../../Component/Element/MyTextField';
import {theme} from '../../../App';
import Cart from './Cart';

function SearchHeader() {
  return (
    <View
      style={{
        backgroundColor: theme.colors.primary,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        padding: 10,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <MyTextField sx={{flex: 2, marginRight: 10}} />
      <View
        style={{
          flex: 1,
          height: 50,
          borderRadius: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity>
          <FontAwesome name="filter" size={30} color={theme.colors.white} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="heart" size={30} color={theme.colors.white} />
        </TouchableOpacity>
        <Cart />
      </View>
    </View>
  );
}

export default SearchHeader;
