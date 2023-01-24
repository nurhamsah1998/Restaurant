import * as React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import Card from '../../../Component/Element/Card';
import {theme} from '../../../App';
import MyTextField from '../../../Component/Element/MyTextField';
import BannerImageCarousel from './Banner';
import {secondSectionData} from '../../../mockup';
import SugestionSection from '../Search/SugestionSection';

function HomeScreen() {
  const navigate = useNavigation();
  const [isScroll, setIsScroll] = React.useState(true);
  const dataCard = [
    {
      title: 'Budling Package - Healty Chalange',
      price: 'Rp65.000',
      review: '1k review',
      location: 'Njabon, kediri',
      tag: 'asian food',
      path: require('../../../Component/Asset/posterLandscape_1.png'),
    },
    {
      title: 'Premium Coffee - Bundling Price',
      review: '1.5k review',
      location: 'Mbabal, ngadi',
      price: 'Rp34.000',
      tag: 'makan siang',
      path: require('../../../Component/Asset/posterLandscape_2.png'),
    },
    {
      title: 'Family Burger Universe',
      review: '345 review',
      location: 'Botoran, tulungagung',
      price: 'Rp56.500',
      tag: 'khas nusantara',
      path: require('../../../Component/Asset/posterLandscape_3.png'),
    },
  ];
  const {width} = Dimensions.get('window');
  const content = [
    {
      label: 'Fresh Vegetables',
      tag: 'be healty and eat healty',
      color: theme.colors.green,
    },
    {
      label: 'Coffee Break',
      tag: 'we have the best coffee in town',
      color: theme.colors.cyan,
    },
    {
      label: 'Beef Food',
      tag: 'indulge your tongue',
      color: theme.colors.warning,
    },
    {
      label: 'Juice',
      tag: 'many varieties of juices',
      color: theme.colors.error,
    },
  ];
  const Ordertype = [
    {
      label: 'Dine in',
      tag: 'Feel the satisfaction of ordering at our restaurant',
      color: theme.colors.blue,
      icon: 'local-dining',
    },
    {
      label: 'Delivery Orders',
      tag: 'Lazy to go out? Relax, you can order delivery',
      color: theme.colors.deepPurple,
      icon: 'delivery-dining',
    },
  ];

  /// stackoverflow START
  /// quuestion :https://stackoverflow.com/questions/71476444/react-native-how-to-add-images-with-map
  /// answer by Fiston Emmanuel : https://stackoverflow.com/users/12431576/fiston-emmanuel
  const bannerImage = [
    {
      img: require('../../../Component/Asset/pic-1.png'),
    },
    {
      img: require('../../../Component/Asset/pic-2.png'),
    },
    {
      img: require('../../../Component/Asset/pic-3.png'),
    },
    {
      img: require('../../../Component/Asset/pic-4.png'),
    },
  ];
  const secondBannerImage = [
    {
      path: require('../../../Component/Asset/second_banner_1.png'),
      label: 'Ice Cream',
    },
    {
      path: require('../../../Component/Asset/second_banner_2.png'),
      label: 'Juice',
    },
    {
      path: require('../../../Component/Asset/second_banner_3.png'),
      label: 'Calories',
    },
    {
      path: require('../../../Component/Asset/second_banner_4.png'),
      label: 'Healthy',
    },
  ];
  /// stackoverflow END

  React.useEffect(() => {
    if (isScroll) {
      setIsScroll(true);
    }
  }, [isScroll]);

  const onPressItem = i => {
    navigate.navigate('RootDashboard', {screen: 'ProductDetail', params: {i}});
  };
  return (
    <GestureHandlerRootView>
      <ScrollView style={{backgroundColor: theme.colors.white}}>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
            marginBottom: -20,
          }}>
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
        <BannerImageCarousel
          isBanner
          autoPlay
          mode="parallax"
          data={bannerImage}
        />
        <View
          style={{
            backgroundColor: '#fff',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            margin: 10,
          }}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{flexDirection: 'row', height: 70}}>
            {secondBannerImage.map((item, index) => (
              <ImageBackground
                style={{
                  width: 130,
                  height: 65,
                  marginRight: 10,
                  shadowColor: '#000',
                  elevation: 5,
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
                key={index}
                imageStyle={{borderRadius: 10}}
                source={item.path}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Bold',
                    color: theme.colors.white,
                    fontSize: 17,
                    marginLeft: 10,
                    maxWidth: 74,
                  }}>
                  {item.label}
                </Text>
              </ImageBackground>
            ))}
          </ScrollView>
          <SugestionSection onPressItem={onPressItem} disabledMArginBottom />
          <View>
            <Text style={{fontSize: 19, fontFamily: 'Poppins-Bold'}}>
              Control is in your hands
            </Text>
            {Ordertype.map((item, index) => (
              <TouchableOpacity
                style={{
                  width: '100%',
                  backgroundColor: item.color,
                  marginTop: index === 1 ? 20 : 10,
                  borderRadius: 10,
                  padding: 10,
                  elevation: 5,
                  shadowColor: '#000',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                key={index}>
                <MaterialIcons
                  name={item.icon}
                  size={50}
                  style={{marginRight: 10}}
                  color={theme.colors.white}
                />
                <Text
                  style={{
                    color: theme.colors.white,
                    fontFamily: 'Poppins-Bold',
                    fontSize: 20,
                  }}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 19, fontFamily: 'Poppins-Bold'}}>
              Family Time
            </Text>
            <Text style={{color: theme.colors.primary}}>View All</Text>
          </View>
          <View>
            {dataCard.map((x, y) => (
              <Card
                key={y}
                index={y}
                title={x.title}
                tag={x.tag}
                price={x.price}
                location={x.location}
                review={x.review}
                isDivider
                source={x.path}
              />
            ))}
          </View>
          <Text style={{fontSize: 19, fontFamily: 'Poppins-Bold'}}>
            Just choose what you want
          </Text>
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
                  marginTop: 10,
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
          <SugestionSection
            onPressItem={onPressItem}
            data={secondSectionData}
          />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

export default HomeScreen;
