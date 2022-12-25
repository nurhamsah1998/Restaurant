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

import {theme} from '../../../App';
import ProductCard from '../../../Component/Element/ProductCard';

function SearchScreen() {
  const category = [
    {
      label: 'Chicken',
      value: 'chicken',
    },
    {
      label: 'Vegetables',
      value: 'vegetables',
    },
    {
      label: 'Fruit',
      value: 'fruit',
    },
    {
      label: 'Snack',
      value: 'snack',
    },
  ];
  const product = [
    {
      label: 'Burger Giant',
      price: 'Rp12.000',
      review: '1.2k',
      imgLink:
        'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Burger Armagedon',
      price: 'Rp6.000',
      review: '2.2k',
      imgLink:
        'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Potato Stick',
      price: 'Rp5.000',
      review: '1.1k',
      imgLink:
        'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Burger + Ice Drink',
      price: 'Rp9500',
      review: '677',
      imgLink:
        'https://images.pexels.com/photos/11344983/pexels-photo-11344983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Pizza With Egg',
      price: 'Rp12.000',
      review: '2.2k',
      imgLink:
        'https://images.pexels.com/photos/845808/pexels-photo-845808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Hot Dog Cogan',
      price: 'Rp6.000',
      review: '978',
      imgLink:
        'https://images.pexels.com/photos/4113464/pexels-photo-4113464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Happy Burger Meal',
      price: 'Rp5.000',
      review: '7.1k',
      imgLink:
        'https://images.pexels.com/photos/2280573/pexels-photo-2280573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Special Edition! Burger',
      price: 'Rp9.500',
      review: '6.7k',
      imgLink:
        'https://images.pexels.com/photos/2983104/pexels-photo-2983104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
  const [selectedCategory, setSelectedIdCategory] = React.useState(null);

  return (
    <View
      style={{
        backgroundColor: theme.colors.white,
        paddingHorizontal: 10,
        paddingTop: 20,
        flex: 1,
      }}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            flex: 5,
            height: 55,
            backgroundColor: '#fff',
            elevation: 5,
            shadowColor: '#000',
            borderRadius: 20,
            marginRight: 20,
            flexDirection: 'row',
            paddingLeft: 10,
            alignItems: 'center',
          }}>
          <AntDesign name="search1" size={30} color={theme.colors.divider} />
          <Text
            variant="titleMedium"
            style={{color: theme.colors.divider, marginLeft: 10}}>
            What do you want ?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            height: 55,
            backgroundColor: '#fff',
            elevation: 5,
            shadowColor: '#000',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="filter" size={30} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={category}
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
                  marginRight:
                    index === 0 && index === category?.length - 1 ? 0 : 10,
                }}
                onPress={() => setSelectedIdCategory(index)}>
                <Text
                  style={{
                    color:
                      index === selectedCategory
                        ? '#fff'
                        : theme.colors.primary,
                  }}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.value}
        />
      </View>
      <View
        style={{
          marginBottom: 110,
        }}>
        <ProductCard data={product} keyExtractor={item => item.label} />
      </View>
    </View>
  );
}

export default SearchScreen;
