import React from 'react';
import {Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <View style={{marginTop: 10}}>
        <Button
          onPress={async () => {
            try {
              await AsyncStorage.removeItem('@token');
              navigation.navigate('Login');
            } catch (e) {
              // saving error
            }
          }}
          title="Hapus token"
        />
      </View>
    </View>
  );
}

export default SettingsScreen;
