import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Text, Button, Divider} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {theme} from '../../App';

function Card({title, tag, price, location, review, isDivider, imgUrl, index}) {
  return (
    <View>
      {isDivider ? <Divider /> : null}
      <View style={{marginVertical: index === 0 ? 0 : 15}}>
        <View style={{flex: 1, height: 200}}>
          <View
            style={{
              elevation: 5,
              shadowColor: '#000',
              backgroundColor: theme.colors.white,
              borderRadius: 10,
            }}>
            <Image
              style={{width: '100%', height: '100%', borderRadius: 10}}
              source={{
                uri: imgUrl,
              }}
            />
          </View>
        </View>
        <Text variant="titleLarge" style={{marginTop: 10}}>
          {title}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 20,
            }}>
            <MaterialIcons
              name="local-dining"
              size={25}
              style={{marginRight: 5}}
              color={theme.colors.primary}
            />
            <Text>Dine in</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialIcons
              name="delivery-dining"
              size={25}
              style={{marginRight: 5}}
              color={theme.colors.primary}
            />
            <Text>Delivery</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: -8,
          }}>
          {/* <Text variant="titleMedium" style={{color: '#868686'}}>
            {tag}
          </Text> */}
          <View
            style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
            {/* <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 20,
              }}>
              <MaterialIcons
                name="star-rate"
                size={25}
                style={{marginRight: 10}}
                color={theme.colors.primary}
              />
              <Text>{review}</Text>
            </View> */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons
                name="people"
                size={25}
                style={{marginRight: 5}}
                color={theme.colors.primary}
              />
              <Text>23</Text>
            </View>
          </View>
        </View>

        <Text style={{fontSize: 25, fontFamily: 'Poppins-Bold'}}>{price}</Text>
      </View>
    </View>
  );
}

export default Card;
