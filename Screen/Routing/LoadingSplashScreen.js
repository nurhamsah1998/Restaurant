import React from 'react';
import {View, StyleSheet, Image, ImageBackground, Alert} from 'react-native';

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
      {/* stackoverflow Start */}
      {/* question: https://stackoverflow.com/questions/52307978/how-to-disable-react-navigations-stack-navigator-transition */}
      {/* Answer By wobsoriano : https://stackoverflow.com/users/4698790/wobsoriano */}
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../../Component/Asset/launch_screen.png')}
      />
      {/* stackoverflow End */}
    </View>
  );
}

export default LoadingSplashScreen;
