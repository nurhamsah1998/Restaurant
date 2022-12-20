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
    <GestureHandlerRootView>
      <Carousel
        loop
        width={width}
        height={width / 1.5}
        autoPlay={true}
        data={data}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        scrollAnimationDuration={1000}
        // onSnapToItem={index => console.log('current index:', index)}
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
  );
}

export default Index;
