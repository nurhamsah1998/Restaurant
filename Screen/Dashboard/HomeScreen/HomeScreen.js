import * as React from 'react';
import {View, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Card from '../../../Component/Element/Card';
import {theme} from '../../../App';
import MyTextField from '../../../Component/Element/MyTextField';
import BannerImageCarousel from './Banner';
import {data} from '../../../mockup';
import SugestionSection from '../Search/SugestionSection';

function HomeScreen() {
  const [isScroll, setIsScroll] = React.useState(true);
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
  const {width} = Dimensions.get('window');
  const content = [
    {
      label: 'Fresh Vegetables',
      tag: 'be healty and eat healty',
      color: theme.colors.greenTeal,
    },
    {
      label: 'Coffee Break',
      tag: 'we have the best coffee in town',
      color: theme.colors.brown,
    },
    {
      label: 'Beef Food',
      tag: 'indulge your tongue',
      color: theme.colors.errorBackground,
    },
    {
      label: 'Juice',
      tag: 'many varieties of juices',
      color: theme.colors.aqua,
    },
  ];
  React.useEffect(() => {
    if (isScroll) {
      setIsScroll(true);
    }
  }, [isScroll]);

  return (
    <GestureHandlerRootView>
      <ScrollView style={{backgroundColor: theme.colors.white}}>
        <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
          <MyTextField
            leftIcon="magnify"
            fontSize={15}
            sx={{marginRight: 10, flex: 5}}
          />
          <TouchableOpacity
            style={{
              backgroundColor: theme.colors.white,
              flex: 1,
              height: '100%',
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 5,
              shadowColor: '#000',
            }}>
            <Ionicons
              name="notifications"
              style={{marginHorizontal: 15}}
              size={25}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        </View>
        {/* <BannerImageCarousel isBanner autoPlay mode="parallax" data={data} /> */}

        <View
          style={{
            backgroundColor: '#fff',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            margin: 10,
          }}>
          <SugestionSection />
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
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            {content.map((item, index) => (
              <TouchableOpacity
                style={{
                  width: width / 2.2,
                  backgroundColor: item.color,
                  marginTop: 20,
                  height: width / 2.2,
                  justifyContent: 'center',
                  borderRadius: 10,
                  padding: 10,
                  elevation: 5,
                  shadowColor: '#000',
                }}
                key={index}>
                <Text
                  style={{
                    color: theme.colors.white,
                    fontFamily: 'Poppins-Bold',
                    fontSize: 23,
                    textAlign: 'center',
                  }}>
                  {item.label}
                </Text>
                <Text
                  style={{
                    color: theme.colors.white,
                    textAlign: 'center',
                  }}>
                  {item.tag}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <SugestionSection />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

export default HomeScreen;
