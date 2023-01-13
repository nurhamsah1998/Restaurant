import React from 'react';
import {Text, Button} from 'react-native-paper';
import {
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          paddingBottom: 10,
          paddingHorizontal: 10,
          paddingTop: 10,
        }}>
        <View>
          <Chip
            data={category}
            selectedCategory={selectedCategory}
            setSelectedIdCategory={setSelectedIdCategory}
            keyExtractor={item => item.value}
          />
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          flex: 1,
        }}>
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
