import * as React from 'react';
import {View, Dimensions, Image, TouchableOpacity} from 'react-native';
import {Text, Button} from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';
import 'react-native-reanimated';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {theme} from '../../../../App';

function Index() {
  const {width} = Dimensions.get('window');
  const [isVertical, setIsVertical] = React.useState(false);
  const progressValue = useSharedValue(0);
  const colors = ['#26292E', '#899F9C', '#B3C680', '#5C6265', '#F5D399'];
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
      <Carousel
        loop
        width={width}
        height={width / 1.5}
        autoPlay={true}
        data={data}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        autoPlayInterval={1500}
        pagingEnabled
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        renderItem={({index}) => (
          <View
            style={{
              flex: 1,
              backgroundColor: data[index].color,
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
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: '15%',
          right: '5%',
        }}>
        {Array(5)
          .fill(theme.colors.primary)
          .map((backgroundColor, index) => {
            return (
              <PaginationItem
                backgroundColor={backgroundColor}
                animValue={progressValue}
                index={index}
                key={index}
                isRotate={isVertical}
                length={colors.length}
              />
            );
          })}
      </View>
    </View>
  );
}

const PaginationItem = props => {
  const {animValue, index, length, backgroundColor, isRotate} = props;
  const width = 15;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        width,
        height: width,
        borderRadius: 50,
        overflow: 'hidden',
        marginRight: 10,
        transform: [
          {
            rotateZ: isRotate ? '180deg' : '0deg',
          },
        ],
      }}>
      <Animated.View
        style={[
          {
            borderRadius: 50,
            backgroundColor,
            flex: 1,
          },
          animStyle,
        ]}
      />
    </View>
  );
};

export default Index;
