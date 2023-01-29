import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native-paper';
import {Alert, ImageBackground, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {register} from '../../Store/AuthReducer';
import MyButton from '../../Component/Element/MyButton';
import {theme} from '../../App';

function OnBoardding() {
  const [navTo, setNavTo] = React.useState('');

  const style = StyleSheet.create({
    helloContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
      position: 'relative',
    },
    finishAndDoneContainer: {flex: 1, backgroundColor: theme.colors.background},
    fullView: {width: '100%', height: '100%'},
    containerChildren: {padding: 40},
    title: {color: theme.colors.white, fontWeight: 'bold'},
    tag: {
      color: theme.colors.white,
      fontWeight: '600',
    },
    navigatorContainer: {flex: 1},
    button: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 20,
      right: 20,
      elevation: 5,
      shadowColor: '#000',
      borderRadius: 5,
      backgroundColor: 'white',
    },
  });

  function Hello({navigation}) {
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
    React.useEffect(() => {
      setNavTo('Welcome');
    }, []);
    return (
      <View style={style.helloContainer}>
        <ImageBackground
          resizeMode="cover"
          style={style.fullView}
          source={require('../../Component/Asset/OnBoardingImage-1.jpg')}>
          <View style={style.containerChildren}>
            <Text variant="displaySmall" style={style.title}>
              All Your Favorites In Here!
            </Text>
            <Text variant="headlineSmall" style={style.tag}>
              Order from the best local restaurants with easy, on-demand
              delivery.
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
  function Welcome({navigation}) {
    React.useEffect(() => {
      setNavTo('Finish');
    }, []);
    return (
      <View style={style.finishAndDoneContainer}>
        <ImageBackground
          resizeMode="cover"
          style={style.fullView}
          source={require('../../Component/Asset/OnBoardingImage-2.jpg')}>
          <View style={style.containerChildren}>
            <Text variant="displaySmall" style={style.title}>
              Free Delivery Order
            </Text>
            <Text variant="headlineSmall" style={style.tag}>
              Free delivery for new customers via Apple Pay and others payment
              methods.
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  function Finish({navigation}) {
    React.useEffect(() => {
      setNavTo('Done');
    }, []);
    return (
      <View style={style.finishAndDoneContainer}>
        <ImageBackground
          resizeMode="cover"
          style={style.fullView}
          source={require('../../Component/Asset/OnBoardingImage-3.jpg')}>
          <View style={style.containerChildren}>
            <Text variant="displaySmall" style={style.title}>
              Choose your food
            </Text>
            <Text variant="headlineSmall" style={style.tag}>
              Easily find your type of food craving and you’ll get delivery in
              wide range.
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
  const navigate = useNavigation();
  const AuthNavigationStack = createNativeStackNavigator();
  const dispatch = useDispatch();
  return (
    <View style={style.navigatorContainer}>
      <AuthNavigationStack.Navigator
        screenOptions={{animation: 'slide_from_right'}}>
        <AuthNavigationStack.Screen
          options={{headerShown: false}}
          name="Hello"
          component={Hello}
        />
        <AuthNavigationStack.Screen
          options={{headerShown: false}}
          name="Welcome"
          component={Welcome}
        />
        <AuthNavigationStack.Screen
          options={{headerShown: false}}
          name="Finish"
          component={Finish}
        />
      </AuthNavigationStack.Navigator>
      <View style={style.button}>
        {navTo.includes('Done') ? (
          <MyButton
            onPress={() => dispatch(register())}
            title="Enter Dashboard"
            mode="contained"
            color="primary"
          />
        ) : (
          <MyButton
            onPress={() => navigate.navigate(navTo)}
            title="Next Step"
            mode="contained"
            color="primary"
          />
        )}
      </View>
    </View>
  );
}

export default OnBoardding;
