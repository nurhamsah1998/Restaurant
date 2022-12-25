import * as React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

function AccountScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>sfd!</Text>
      <Button
        onPress={async () => {
          try {
            await AsyncStorage.removeItem('@access_token');
            navigation.navigate('AuthRouteStack', {
              screen: 'Login',
            });
          } catch (e) {
            // remove error
          }

          console.log('Done.');
        }}
        mode="contained">
        Logouut
      </Button>
    </View>
  );
}

export default AccountScreen;
