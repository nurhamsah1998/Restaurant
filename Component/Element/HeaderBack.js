import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import IconContained from './IconContained';
import {useNavigation} from '@react-navigation/native';

function HeaderBack({title, marginBottom = 30}) {
  const navigate = useNavigation();
  return (
    <View
      style={{
        marginBottom,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <IconContained onPress={() => navigate.goBack()} icon="left" />
      <Text variant="headlineSmall">{title}</Text>
      <View style={{width: 40, height: 40}} />
    </View>
  );
}

export default HeaderBack;
