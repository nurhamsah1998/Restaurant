import React from 'react';
import {FlatList, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

import {theme} from '../../App';

export function ChipWrap({setSelectedIdCategory, data, selectedCategory}) {
  const style = StyleSheet.create({
    main: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 5,
      elevation: 2,
      shadowColor: theme.colors.primary,
      borderRadius: 5,
      borderColor: theme.colors.primary,
      borderWidth: 1,
    },
    mainChipWrap: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
      borderColor: theme.colors.primary,
      borderWidth: 1,
    },
    mainReadOnly: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 5,
      elevation: 2,
      shadowColor: theme.colors.primary,
      borderRadius: 5,
    },
    seperator: {width: 10},
    titleChipWrapColor: {color: theme.colors.primary},
    containerChipWrap: {flexDirection: 'row', flexWrap: 'wrap'},
  });
  return (
    <View style={style.containerChipWrap}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            style.mainChipWrap,
            {
              backgroundColor:
                index === selectedCategory
                  ? theme.colors.primary
                  : theme.colors.white,
              marginRight: index === data?.length ? 0 : 10,
              marginTop: 10,
            },
          ]}
          onPress={() => setSelectedIdCategory(index)}>
          <Text
            variant="titleMedium"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              color: index === selectedCategory ? '#fff' : theme.colors.primary,
            }}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function Chip({
  setSelectedIdCategory,
  data,
  selectedCategory,
  keyExtractor,
  readOnly,
}) {
  const colorReadOnly = readOnly
    ? theme.colors.lightPrimary
    : theme.colors.white;
  const style = StyleSheet.create({
    main: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 5,
      elevation: 2,
      shadowColor: theme.colors.primary,
      borderRadius: 5,
      borderColor: theme.colors.primary,
      borderWidth: 1,
    },
    mainChipWrap: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
      borderColor: theme.colors.primary,
      borderWidth: 1,
    },
    mainReadOnly: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 5,
      elevation: 2,
      shadowColor: theme.colors.primary,
      borderRadius: 5,
    },
    seperator: {width: 10},
    titleChipWrapColor: {color: theme.colors.primary},
    containerChipWrap: {flexDirection: 'row', flexWrap: 'wrap'},
  });
  return (
    <FlatList
      data={data}
      horizontal
      /// stackoverflow start
      /// question : https://stackoverflow.com/questions/73338922/how-do-i-add-gap-in-between-items-in-flatlist
      /// answered by marcel099 : https://stackoverflow.com/users/13419373/marcel099
      ItemSeparatorComponent={() => <View style={style.seperator} />}
      /// stackoverflow end
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={[
              readOnly ? style.mainReadOnly : style.main,
              {
                backgroundColor:
                  index === selectedCategory
                    ? theme.colors.primary
                    : colorReadOnly,
              },
            ]}
            onPress={() => setSelectedIdCategory(index)}>
            <Text
              variant="titleMedium"
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
