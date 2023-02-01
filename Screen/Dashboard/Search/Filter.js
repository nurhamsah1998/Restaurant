import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {ChipWrap} from '../../../Component/Element/Chip';
import {category} from '../../../mockup';
import SliderComponent from '../../../Component/Element/SliderComponent';

function Filter() {
  const navigation = useNavigation();
  const style = StyleSheet.create({});
  const [selectedCategory, setSelectedIdCategory] = React.useState(null);
  return (
    <View>
      <View>
        <Text variant="titleMedium">Filter by category food</Text>
        <ChipWrap
          data={category}
          selectedCategory={selectedCategory}
          setSelectedIdCategory={setSelectedIdCategory}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Text variant="titleMedium">Select Price Range</Text>
        <SliderComponent />
      </View>
    </View>
  );
}

export default Filter;
