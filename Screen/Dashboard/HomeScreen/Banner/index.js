import * as React from 'react';
import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
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

function BannerImageCarousel({
  data = [],
  autoPlay = false,
  mode = '',
  isBanner = false,
}) {
  const {width} = Dimensions.get('window');
  const [isVertical, setIsVertical] = React.useState(false);
  const progressValue = useSharedValue(0);
  const colors = ['#26292E', '#899F9C', '#B3C680', '#5C6265', '#F5D399'];

  return (
    <View>
      <Carousel
        loop
        mode={mode}
        width={width}
        height={width / 1.4}
        autoPlay={autoPlay}
        data={data}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        autoPlayInterval={2500}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        renderItem={({item, index}) => {
          return (
            <ImageBackground
              resizeMode="center"
              source={require('../../../../Component/Asset/RG.png')}
              style={{
                flex: 1,
                backgroundColor: theme.colors.divider,
                borderRadius: isBanner ? 10 : 0,
                width: '100%',
                elevation: 5,
                shadowColor: '#000',
              }}>
              <Image
                style={{
                  flex: 1,

                  borderRadius: isBanner ? 10 : 0,
                  width: '100%',
                  height: '100%',
                }}
                resizeMode="cover"
                source={item.imgLink}
              />
            </ImageBackground>
          );
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: isBanner ? 0 : 27,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
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
        shadowColor: '#000',
        elevation: 4,
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

export default BannerImageCarousel;
