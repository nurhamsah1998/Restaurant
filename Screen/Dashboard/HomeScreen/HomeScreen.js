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
import {
  secondSectionData,
  dataCard,
  Ordertype,
  content,
  bannerImage,
  secondBannerImage,
} from '../../../mockup';
import SugestionSection from '../Search/SugestionSection';

function HomeScreen() {
  const navigate = useNavigation();
  const [isScroll, setIsScroll] = React.useState(true);
  const {width} = Dimensions.get('window');

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
          }}>
          <MyTextField
            placeholder="What do you want to eat ?"
            leftIcon="magnify"
            fontSize={15}
            sx={{flex: 1}}
          />
        </View>
        <Text
          variant="titleMedium"
          style={{textAlign: 'center', marginBottom: -20, marginTop: 15}}>
          Find the food that always suits you
        </Text>
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
