import * as React from 'react';
import {Text, View, ScrollView, Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import MyTextField from '../../Component/Element/MyTextField';

function HomeScreen() {
  const width = Dimensions.get('window').width;
  return (
    <ScrollView>
      <View style={{flex: 1, position: 'relative'}}>
        {/* <View style={{position: 'absolute', right: 0, left: 0}}>
          <MyTextField />
        </View> */}

        <Carousel
          loop
          width={width}
          height={width / 2}
          data={[...new Array(6).keys()]}
          scrollAnimationDuration={5000}
          onSnapToItem={index => console.log('current index:', index)}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          renderItem={({index}) => (
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center', fontSize: 30}}>{index}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
