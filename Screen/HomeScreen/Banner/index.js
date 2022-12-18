import * as React from 'react';
import {View, Dimensions, Image, TouchableOpacity} from 'react-native';
import {Text, Button} from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';
import 'react-native-reanimated';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function Index() {
  const {width} = Dimensions.get('window');
  const data = [
    {
      img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      img: 'https://images.pexels.com/photos/10883402/pexels-photo-10883402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      img: 'https://images.pexels.com/photos/6752365/pexels-photo-6752365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      img: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      img: 'https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <View
        style={{
          position: 'absolute',
          top: 10,
          zIndex: 2,
          left: 10,
          right: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <Button
          icon="cloud-search"
          style={{
            backgroundColor: '#fff',
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            marginRight: 20,
            borderRadius: 5,
            paddingHorizontal: 10,
          }}>
          <Text>Press Here</Text>
        </Button>
        <Button
          style={{
            width: 50,
            height: 50,
            backgroundColor: '#fff',
            borderRadius: 5,
          }}></Button>
      </View>
      <GestureHandlerRootView style={{flex: 1}}>
        <Carousel
          loop
          width={width}
          height={width / 1.5}
          autoPlay={true}
          data={data}
          scrollAnimationDuration={5000}
          onSnapToItem={index => console.log('current index:', index)}
          renderItem={({index}) => (
            <View
              style={{
                flex: 1,
              }}>
              <Image
                style={{flex: 1}}
                source={{
                  uri: `${data[index]?.img}`,
                }}
              />
            </View>
          )}
        />
      </GestureHandlerRootView>
    </View>
  );
}

export default Index;
