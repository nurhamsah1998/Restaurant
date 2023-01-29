import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import IconContained from './IconContained';
import {useNavigation} from '@react-navigation/native';

function HeaderBack({title, onPressBack}) {
  return (
    <View
      style={{
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <IconContained onPress={onPressBack} icon="arrow-back" />
      <Text variant="headlineSmall">{title}</Text>
      <View style={{width: 40, height: 40}} />
    </View>
  );
}

export default HeaderBack;
