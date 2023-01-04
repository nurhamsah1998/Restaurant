import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';

import {theme} from '../../App';

function Chip({setSelectedIdCategory, data, selectedCategory, keyExtractor}) {
  return (
    <FlatList
      data={data}
      horizontal
      /// stackoverflow start
      /// question : https://stackoverflow.com/questions/73338922/how-do-i-add-gap-in-between-items-in-flatlist
      /// answered by marcel099 : https://stackoverflow.com/users/13419373/marcel099
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      /// stackoverflow end
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 10,
              backgroundColor:
                index === selectedCategory ? theme.colors.primary : '#eeeeee',
              elevation: 2,
              shadowColor: theme.colors.primary,
              borderRadius: 20,
              borderColor: theme.colors.primary,
              borderWidth: 1,
            }}
            onPress={() => setSelectedIdCategory(index)}>
            <Text
              style={{
                color:
                  index === selectedCategory ? '#fff' : theme.colors.primary,
              }}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      }}
      keyExtractor={keyExtractor}
    />
  );
}

export default Chip;
