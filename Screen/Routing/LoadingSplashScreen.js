import React from 'react';
import {View, StyleSheet, Image, ImageBackground, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const style = StyleSheet.create({
  containerSplashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

function LoadingSplashScreen({params}) {
  const navigation = useNavigation();
  const hasUnsavedChanges = Boolean('p');
  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        if (!hasUnsavedChanges) {
          // If we don't have unsaved changes, then we don't need to do anything
          return;
        }

        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          'Discard changes?',
          'You have unsaved changes. Are you sure to discard them and leave the screen?',
          [
            {text: "Don't leave", style: 'cancel', onPress: () => {}},
            {
              text: 'Discard',
              style: 'destructive',
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: () => navigation.dispatch(e.data.action),
            },
          ],
        );
      }),
    [navigation, hasUnsavedChanges],
  );
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
