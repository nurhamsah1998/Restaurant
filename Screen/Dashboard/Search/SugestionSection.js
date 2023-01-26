import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Text} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {theme} from '../../../App';
import {FormatCurrency} from '../../../Component/FormatCurrency';
import {sectionData} from '../../../mockup';

function SugestionSection({
  onPressItem,
  disabledMArginBottom = false,
  data = false,
}) {
  const {width} = Dimensions.get('window');
  console.log('SugestionSection - re-render');
  const isData = data || sectionData;
  return (
    <View style={{marginTop: 20, marginBottom: disabledMArginBottom ? 0 : 60}}>
      {isData.map((item, index) => {
        return (
          <View key={index}>
            <Text style={{fontSize: 19, fontFamily: 'Poppins-Bold'}}>
              {item.title}
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {item.data.map((content, contentIndex) => (
                <TouchableOpacity
                  key={contentIndex}
                  onPress={() => onPressItem(content)}
                  style={{
                    margin: 5,
                    marginTop: 10,
                    paddingBottom: 10,
                  }}>
                  <ImageBackground
                    source={require('../../../Component/Asset/RG.png')}
                    resizeMode="center"
                    style={{
                      backgroundColor: theme.colors.divider,
                      borderRadius: 10,
                    }}>
                    <Image
                      source={{uri: content.imgLink}}
                      style={{
                        width: width / 2.21,
                        height: 150,
                        borderRadius: 10,
                      }}
                    />
                  </ImageBackground>

                  <View style={{marginTop: 5, paddingBottom: 5}}>
                    <Text variant="bodyLarge">{content.label}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginRight: 10,
                        }}>
                        <AntDesign
                          name="star"
                          size={15}
                          color={theme.colors.primary}
                        />
                        <Text
                          style={{
                            marginLeft: 2,
                            color: theme.colors.primary,
                          }}>
                          {`${content.review} Review`}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <AntDesign
                          name="clockcircle"
                          size={15}
                          color={theme.colors.primary}
                        />
                        <Text
                          style={{
                            marginLeft: 2,
                            color: theme.colors.primary,
                          }}>
                          {content.duration || '5 min'}
                        </Text>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      {content?.isDeliver ? (
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginRight: 8,
                          }}>
                          <MaterialIcons
                            name="delivery-dining"
                            size={20}
                            style={{marginRight: 5}}
                            color={theme.colors.primary}
                          />
                          <Text>Delivery</Text>
                        </View>
                      ) : null}
                      {content?.isDineIn ? (
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginRight: 15,
                          }}>
                          <MaterialIcons
                            name="local-dining"
                            size={20}
                            style={{marginRight: 5}}
                            color={theme.colors.primary}
                          />
                          <Text>Dine in</Text>
                        </View>
                      ) : null}
                    </View>
                    <Text
                      variant="titleLarge"
                      style={{marginTop: 10, fontWeight: '700'}}>
                      {FormatCurrency(content.price)}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        );
      })}
    </View>
  );
}

export default SugestionSection;
