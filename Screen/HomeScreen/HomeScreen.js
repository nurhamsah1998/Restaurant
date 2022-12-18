import * as React from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Button, Text, Divider} from 'react-native-paper';
import 'react-native-reanimated';
import Dot from '../../Component/Element/Dot';
import Banner from './Banner';
import Card from '../../Component/Element/Card';
import {theme} from '../../App';

function HomeScreen() {
  const dataCard = [
    {
      title: 'Chinese Food All Star',
      price: 'Rp12.000',
      review: '1k review',
      location: 'Njabon, kediri',
      tag: 'asian food',
      imgUrl:
        'https://images.pexels.com/photos/3763792/pexels-photo-3763792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Makarani Pedas Toping Ayam',
      review: '1.5k review',
      location: 'Mbabal, ngadi',
      price: 'Rp9.000',
      tag: 'makan siang',
      imgUrl:
        'https://images.pexels.com/photos/2232433/pexels-photo-2232433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Ayam Goreng Kemangi',
      review: '345 review',
      location: 'Botoran, tulungagung',
      price: 'Rp16.500',
      tag: 'khas nusantara',
      imgUrl:
        'https://images.pexels.com/photos/12842992/pexels-photo-12842992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
  return (
    <View>
      <ScrollView>
        <View style={{flex: 1}}>
          <Banner />
          <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
              marginTop: -20,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text variant="headlineSmall" style={{fontWeight: '700'}}>
                Best Seller
              </Text>
              <Text variant="titleMedium" style={{color: theme.colors.primary}}>
                View All
              </Text>
            </View>
            <View>
              {dataCard.map((x, y) => (
                <Card
                  key={y}
                  title={x.title}
                  tag={x.tag}
                  price={x.price}
                  location={x.location}
                  review={x.review}
                  isDivider={y !== 0}
                  imgUrl={x.imgUrl}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
