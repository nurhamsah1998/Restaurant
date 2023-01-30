import * as React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import 'react-native-reanimated';
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
  const style = StyleSheet.create({
    scrollView: {backgroundColor: theme.colors.white},
    inputContainer: {flexDirection: 'row', padding: 10, alignItems: 'center'},
    title: {textAlign: 'center', marginBottom: -20, marginTop: 15},
    viewContainer: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      margin: 10,
    },
    categoryContainer: {flexDirection: 'row', height: 70},
    imageBackgroundCategory: {
      width: 130,
      height: 65,
      marginRight: 10,
      shadowColor: '#000',
      elevation: 5,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
    },
    imageStyleBackgroundCategory: {borderRadius: 10},
    categoryTitle: {
      fontFamily: 'Poppins-Bold',
      color: theme.colors.white,
      fontSize: 17,
      marginLeft: 10,
      maxWidth: 74,
    },
    orderTypeTitle: {fontSize: 19, fontFamily: 'Poppins-Bold'},
    ordertypeContainer: {
      width: '100%',
      borderRadius: 10,
      padding: 10,
      elevation: 5,
      shadowColor: '#000',
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconOrderType: {marginRight: 10},
    titleOrderType: {
      color: theme.colors.white,
      fontFamily: 'Poppins-Bold',
      fontSize: 20,
    },
    bundleMenu: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
    },
    posterContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    poster: {
      width: width / 2.2,
      marginTop: 10,
      height: width / 2.2,
      justifyContent: 'center',
      borderRadius: 10,
      padding: 10,
      elevation: 5,
      shadowColor: '#000',
    },
    posterTitle: {
      color: theme.colors.white,
      fontFamily: 'Poppins-Bold',
      fontSize: 23,
      textAlign: 'center',
    },
    posterTag: {
      color: theme.colors.white,
      textAlign: 'center',
    },
  });
  return (
    <GestureHandlerRootView>
      <ScrollView style={style.scrollView}>
        <View style={style.inputContainer}>
          <MyTextField
            placeholder="What do you want to eat ?"
            leftIcon="magnify"
            fontSize={15}
            sx={{flex: 1}}
          />
        </View>
        <Text variant="titleMedium" style={style.title}>
          Find the food that always suits you
        </Text>
        {/* <BannerImageCarousel
          isBanner
          autoPlay
          mode="parallax"
          data={bannerImage}
        /> */}
        <View style={style.viewContainer}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={style.categoryContainer}>
            {secondBannerImage.map((item, index) => (
              <ImageBackground
                style={style.imageBackgroundCategory}
                key={index}
                imageStyle={style.imageStyleBackgroundCategory}
                source={item.path}>
                <Text style={style.categoryTitle}>{item.label}</Text>
              </ImageBackground>
            ))}
          </ScrollView>
          <SugestionSection onPressItem={onPressItem} />
          <View>
            <Text style={style.orderTypeTitle}>Control is in your hands</Text>
            {Ordertype.map((item, index) => (
              <TouchableOpacity
                style={[
                  style.ordertypeContainer,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    backgroundColor: item.color,
                    marginTop: index === 1 ? 20 : 10,
                  },
                ]}
                key={index}>
                <MaterialIcons
                  name={item.icon}
                  size={50}
                  style={style.iconOrderType}
                  color={theme.colors.white}
                />
                <Text style={style.titleOrderType}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={style.bundleMenu}>
            <Text style={style.orderTypeTitle}>Family Time</Text>
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
          <Text style={style.orderTypeTitle}>Just choose what you want</Text>
          <View style={style.posterContainer}>
            {content.map((item, index) => (
              <TouchableOpacity
                style={[style.poster, {backgroundColor: item.color}]}
                key={index}>
                <Text style={style.posterTitle}>{item.label}</Text>
                <Text style={style.posterTag}>{item.tag}</Text>
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
