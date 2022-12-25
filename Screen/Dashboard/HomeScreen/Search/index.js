import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';

function Index() {
  return (
    <View
      style={{
        position: 'absolute',
        top: 10,
        zIndex: 2,
        left: 10,
        right: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
      }}>
      <Button
        icon="cloud-search"
        style={{
          backgroundColor: '#fff',
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
          marginRight: 20,
          borderRadius: 5,
          paddingHorizontal: 10,
        }}>
        <Text>Press Here</Text>
      </Button>
      <Button
        style={{
          width: 50,
          height: 50,
          backgroundColor: '#fff',
          borderRadius: 5,
        }}></Button>
    </View>
  );
}

export default Index;
