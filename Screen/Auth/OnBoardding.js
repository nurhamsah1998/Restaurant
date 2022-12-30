import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, Text} from 'react-native-paper';
import {Alert, ImageBackground} from 'react-native';
import MyButton from '../../Component/Element/MyButton';
import {theme} from '../../App';
import {AuthToken} from '../Routing/contextHelper';

function OnBoardding() {
  const [navTo, setNavTo] = React.useState('');
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
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          position: 'relative',
        }}>
        <ImageBackground
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}
          source={require('../../Component/Asset/OnBoardingImage-1.jpg')}>
          <View style={{padding: 40}}>
            <Text
              variant="displaySmall"
              style={{color: theme.colors.white, fontWeight: 'bold'}}>
              All Your Favorites In Here!
            </Text>
            <Text
              variant="headlineSmall"
              style={{
                color: theme.colors.white,
                fontWeight: '600',
              }}>
              Order from the best local restaurants with easy, on-demand
              delivery.
            </Text>
          </View>
        </ImageBackground>
        {/* <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 40,
            left: 40,
          }}>
          <MyButton
            title="Prev Step"
            sx={{marginRight: 20}}
            mode="outlined"
            color="error"
          />
          <MyButton
            onPress={() => navigation.push('Welcome')}
            title="Next Step"
            mode="contained"
            color="primary"
          />
        </View> */}
      </View>
    );
  }
  function Welcome({navigation}) {
    React.useEffect(() => {
      setNavTo('Finish');
    }, []);
    return (
      <View style={{flex: 1, backgroundColor: theme.colors.background}}>
        <ImageBackground
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}
          source={require('../../Component/Asset/OnBoardingImage-2.jpg')}>
          <View style={{padding: 40}}>
            <Text
              variant="displaySmall"
              style={{color: theme.colors.white, fontWeight: 'bold'}}>
              Free Delivery Order
            </Text>
            <Text
              variant="headlineSmall"
              style={{
                color: theme.colors.white,
                fontWeight: '600',
              }}>
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
      <View style={{flex: 1, backgroundColor: theme.colors.background}}>
        <ImageBackground
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}
          source={require('../../Component/Asset/OnBoardingImage-3.jpg')}>
          <View style={{padding: 40}}>
            <Text
              variant="displaySmall"
              style={{color: theme.colors.white, fontWeight: 'bold'}}>
              Choose your food
            </Text>
            <Text
              variant="headlineSmall"
              style={{
                color: theme.colors.white,
                fontWeight: '600',
              }}>
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
  const {signUp} = React.useContext(AuthToken);
  return (
    <View style={{flex: 1}}>
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
      <View>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 40,
            left: 40,
          }}>
          {navTo.includes('Done') ? (
            <MyButton
              onPress={signUp}
              title="Finish"
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
    </View>
  );
}

export default OnBoardding;
