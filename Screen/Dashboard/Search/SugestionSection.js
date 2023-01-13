import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Text} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {theme} from '../../../App';
import {FormatCurrency} from '../../../Component/FormatCurrency';
import {sectionData} from '../../../mockup';

function SugestionSection({onPressItem}) {
  const {width} = Dimensions.get('window');
  return (
    <View style={{marginTop: 20, marginBottom: 60}}>
      {sectionData.map((item, index) => {
        console.log(item.title, '====');
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
                  <Image
                    source={{uri: content.imgLink}}
                    style={{
                      width: width / 2.21,
                      height: 150,
                      borderRadius: 20,
                    }}
                  />
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
