import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import IconContained from './IconContained';
import {useNavigation} from '@react-navigation/native';

function HeaderBack({title}) {
  const navigate = useNavigation();
  return (
    <View
      style={{
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <IconContained onPress={() => navigate.goBack()} icon="left" />
      <Text variant="headlineMedium">{title}</Text>
      <View style={{width: 40, height: 40}} />
    </View>
  );
}

export default HeaderBack;
