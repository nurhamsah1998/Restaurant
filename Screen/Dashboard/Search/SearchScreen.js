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

function SearchScreen({navigation}) {
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
    {
      label: 'Junik',
      value: 'junik',
    },
  ];
  const product = [
    {
      label: 'Burger Giant',
      price: 12000,
      review: '1.2k',
      desc: 'Est minim veniam proident id laboris cupidatat cillum in dolore nulla ea. variant="titleLarge Laborum consequat exercitation ut officia proident dolore elit eu ad ipsum voluptate. Est quis do enim in. Occaecat amet ex consectetur cupidatat. Voluptate reprehenderit tempor duis cupidatat anim pariatur esse aliqua aliqua laborum. Duis adipisicing exercitation pariatur ad id minim proident incididunt ex exercitation duis. Cupidatat occaecat culpa est ipsum deserunt et qui est esse nisi. Do veniam dolor nulla excepteur sit commodo Lorem consequat cillum ipsum qui cupidatat excepteur.',
      imgLink:
        'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      images: [
        {
          imgLink:
            'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ],
    },
    {
      label: 'Burger Armagedon',
      price: 6000,
      review: '2.2k',
      images: [
        {
          imgLink:
            'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ],
      imgLink:
        'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Potato Stick',
      price: 5000,
      review: '1.1k',
      images: [
        {
          imgLink:
            'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ],
      imgLink:
        'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Burger + Ice Drink',
      price: 7600,
      review: '677',
      images: [
        {
          imgLink:
            'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ],
      imgLink:
        'https://images.pexels.com/photos/11344983/pexels-photo-11344983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Pizza With Egg',
      price: 15500,
      review: '2.2k',
      images: [
        {
          imgLink:
            'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ],
      imgLink:
        'https://images.pexels.com/photos/845808/pexels-photo-845808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Hot Dog Cogan',
      price: 12000,
      review: '978',
      images: [
        {
          imgLink:
            'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ],
      imgLink:
        'https://images.pexels.com/photos/4113464/pexels-photo-4113464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Happy Burger Meal',
      price: 9500,
      review: '7.1k',
      images: [
        {
          imgLink:
            'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ],
      imgLink:
        'https://images.pexels.com/photos/2280573/pexels-photo-2280573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Special Edition! Burger',
      price: 10000,
      review: '6.7k',
      images: [
        {
          imgLink:
            'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ],
      imgLink:
        'https://images.pexels.com/photos/2983104/pexels-photo-2983104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Special Edition! Burger',
      price: 10000,
      review: '6.7k',
      images: [
        {
          imgLink:
            'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ],
      imgLink:
        'https://images.pexels.com/photos/2983104/pexels-photo-2983104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Special Edition! Burger',
      price: 10000,
      review: '6.7k',
      images: [
        {
          imgLink:
            'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ],
      imgLink:
        'https://images.pexels.com/photos/2983104/pexels-photo-2983104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Special Edition! Burger',
      price: 10000,
      review: '6.7k',
      images: [
        {
          imgLink:
            'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ],
      imgLink:
        'https://images.pexels.com/photos/2983104/pexels-photo-2983104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      label: 'Special Edition! Burger',
      price: 10000,
      review: '6.7k',
      images: [
        {
          imgLink:
            'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          imgLink:
            'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ],
      imgLink:
        'https://images.pexels.com/photos/2983104/pexels-photo-2983104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
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
        {/* <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => navigate.navigate('SearchItem')}
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
        </View> */}
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
