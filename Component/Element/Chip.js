import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

import {theme} from '../../App';

function Chip({setSelectedIdCategory, data, selectedCategory, keyExtractor}) {
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={{
              flex: 1,
              marginTop: 15,
              padding: 10,
              backgroundColor:
                index === selectedCategory ? theme.colors.primary : '#fff',
              elevation: 2,
              shadowColor: theme.colors.primary,
              borderRadius: 20,
              borderColor: theme.colors.primary,
              borderWidth: 1,
              marginRight: index === 0 && index === data?.length - 1 ? 0 : 10,
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
