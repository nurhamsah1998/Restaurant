import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text} from 'react-native-paper';

import {theme} from '../../../App';
import MyTextField from '../../../Component/Element/MyTextField';
import {DismissKeyBoard} from '../../Auth/Login';

function SearchItem() {
  return (
    <DismissKeyBoard>
      <View style={{padding: 10, flex: 1}}>
        <View
          style={{
            backgroundColor: '#fff',
            elevation: 5,
            shadowColor: '#000',
            borderRadius: 20,
          }}>
          <MyTextField />
        </View>
      </View>
    </DismissKeyBoard>
  );
}

export default SearchItem;
