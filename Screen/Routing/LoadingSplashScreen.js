import React from 'react';
import {View, StyleSheet, Image, ImageBackground, Alert} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';

const style = StyleSheet.create({
  containerSplashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

function LoadingSplashScreen({params}) {
  return (
    <View style={style.containerSplashScreen}>
      <Image
        source={require('../../Component/Asset/RC.png')}
        resizeMode="center"
        style={{
          alignSelf: 'center',
        }}
      />
      <ActivityIndicator size={40} />
    </View>
  );
}

export default LoadingSplashScreen;
