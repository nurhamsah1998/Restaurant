import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Text, Button, Divider} from 'react-native-paper';
import {theme} from '../../App';

function Card({title, tag, price, location, review, isDivider, imgUrl}) {
  return (
    <View>
      {isDivider ? <Divider /> : null}
      <View style={{marginVertical: 15}}>
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: -8,
          }}>
          <Text variant="titleMedium" style={{color: '#868686'}}>
            {tag}
          </Text>
          <Button icon="star">{review}</Button>
          <Button icon="map-marker">{location}</Button>
        </View>
        <Text variant="titleLarge" style={{marginTop: -5}}>
          {price}
        </Text>
      </View>
    </View>
  );
}

export default Card;
