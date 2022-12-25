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
      color: 'red',
    },
    {
      img: 'https://images.pexels.com/photos/10883402/pexels-photo-10883402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'green',
    },
    {
      img: 'https://images.pexels.com/photos/6752365/pexels-photo-6752365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'blue',
    },
    {
      img: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'black',
    },
    {
      img: 'https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'orange',
    },
  ];
  return (
    <View>
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
          scrollAnimationDuration={5000}
          pagingEnabled
          // onSnapToItem={index => console.log('current index:', index)}
          renderItem={({index}) => (
            <View
              style={{
                flex: 1,
                backgroundColor: data[index].color,
              }}>
              {/* <Image
              style={{flex: 1}}
              source={{
                uri: `${data[index]?.img}`,
              }}
            /> */}
            </View>
          )}
        />
      </GestureHandlerRootView>
    </View>
  );
}

export default Index;
