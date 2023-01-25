import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Text, Button, Divider} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {theme} from '../../App';

function Card({
  title,
  tag,
  price,
  location,
  review,
  isDivider,
  imgUrl,
  index,
  source = false,
}) {
  return (
    <View>
      {isDivider ? <Divider /> : null}
      <View style={{marginVertical: index === 0 ? 0 : 15}}>
        <View style={{flex: 1, height: 200}}>
          <View
            style={{
              backgroundColor: theme.colors.white,
              borderRadius: 10,
            }}>
            <Image
              style={{width: '100%', height: '100%', borderRadius: 10}}
              source={
                source || {
                  uri: imgUrl,
                }
              }
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 20,
            }}>
            <MaterialIcons
              name="delivery-dining"
              size={25}
              style={{marginRight: 5}}
              color={theme.colors.primary}
            />
            <Text>Delivery</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialIcons
              name="people"
              size={25}
              style={{marginRight: 5}}
              color={theme.colors.primary}
            />
            <Text>5</Text>
          </View>
        </View>
        <Text style={{fontSize: 25, fontFamily: 'Poppins-Bold'}}>{price}</Text>
      </View>
    </View>
  );
}

export default Card;
