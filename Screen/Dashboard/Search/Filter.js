import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import Chip from '../../../Component/Element/Chip';
import {category} from '../../../mockup';

function Filter() {
  const navigation = useNavigation();
  const style = StyleSheet.create({});
  const [selectedCategory, setSelectedIdCategory] = React.useState(null);
  return (
    <View>
      <Text variant="titleMedium">Filter</Text>
      <Chip
        isWrap
        data={category}
        selectedCategory={selectedCategory}
        setSelectedIdCategory={setSelectedIdCategory}
        keyExtractor={item => item.value}
      />
    </View>
  );
}

export default Filter;
