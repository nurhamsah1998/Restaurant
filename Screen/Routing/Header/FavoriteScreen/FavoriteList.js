import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import HeaderBack from '../../../../Component/Element/HeaderBack';

function FavoriteList() {
  const navigation = useNavigation();
  const style = StyleSheet.create({
    headerBack: {
      paddingHorizontal: 10,
    },
  });
  return (
    <View>
      <View style={style.headerBack}>
        <HeaderBack onPressBack={() => navigation.goBack()} title="Favorite" />
      </View>
      <Text>FavoriteList</Text>
    </View>
  );
}

export default FavoriteList;
