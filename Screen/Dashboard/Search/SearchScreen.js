import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {theme} from '../../../App';
import ProductCard from '../../../Component/Element/ProductCard';
import Chip from '../../../Component/Element/Chip';
import {product, category} from '../../../mockup';

function SearchScreen({navigation}) {
  const [selectedCategory, setSelectedIdCategory] = React.useState(null);
  const navigate = useNavigation();

  const onPressItem = i => {
    navigate.navigate('RootDashboard', {screen: 'ProductDetail', params: {i}});
  };
  const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
    chipContainer: {
      paddingBottom: 10,
      paddingHorizontal: 10,
      paddingTop: 10,
    },
    productCardContainer: {
      paddingHorizontal: 10,
      flex: 1,
    },
  });
  return (
    <View style={style.container}>
      <View style={style.chipContainer}>
        <View>
          <Chip
            data={category}
            selectedCategory={selectedCategory}
            setSelectedIdCategory={setSelectedIdCategory}
            keyExtractor={item => item.value}
          />
        </View>
      </View>
      <View style={style.productCardContainer}>
        <ProductCard
          onPressItem={onPressItem}
          data={product}
          keyExtractor={item => item.label}
        />
      </View>
    </View>
  );
}

export default SearchScreen;
