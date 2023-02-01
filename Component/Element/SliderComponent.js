import React from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import {AppRegistry, StyleSheet, View, Text} from 'react-native';
import {theme} from '../../App';

function SliderComponent() {
  const [state, setState] = React.useState([200, 300]);
  return (
    <View style={styles.container}>
      <Slider
        maximumValue={1000}
        minimumValue={0}
        step={100 - 200}
        renderTrackMarkComponent={() => (
          <View
            style={{
              width: 5,
              height: 20,
              backgroundColor: theme.colors.secondary,
              borderRadius: 4,
            }}
          />
        )}
        trackMarks={[200, 600, 800]}
        thumbStyle={{backgroundColor: theme.colors.primary}}
        maximumTrackTintColor={theme.colors.lightPrimary}
        minimumTrackTintColor={theme.colors.primary}
        trackStyle={{height: 8}}
        value={state}
        onValueChange={value => setState(value)}
      />
      <Text>
        Value: {state[0]} - {state[1]}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
export default SliderComponent;
