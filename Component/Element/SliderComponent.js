import React from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {theme} from '../../App';
import {FormatCurrency} from '../FormatCurrency';

function SliderComponent() {
  const [state, setState] = React.useState([10000, 30000]);
  const trackMarkLabel = [
    {value: 30000, label: '30K'},
    {value: 50000, label: '50K'},
    {value: 70000, label: '70K'},
    {value: 90000, label: '90K'},
  ];
  return (
    <View style={style.container}>
      <Slider
        maximumValue={100000}
        minimumValue={0}
        step={10000 - 20000}
        renderTrackMarkComponent={i => {
          return (
            <View>
              <View style={style.markHeight} />
              <Text>{trackMarkLabel[i]?.label}</Text>
            </View>
          );
        }}
        trackMarks={trackMarkLabel.map(i => i?.value)}
        thumbStyle={{backgroundColor: theme.colors.primary}}
        maximumTrackTintColor={theme.colors.lightPrimary}
        minimumTrackTintColor={theme.colors.primary}
        trackStyle={style.trackStyle}
        value={state}
        onValueChange={value => setState(value)}
      />
      <Text style={style.textBetween}>
        Between : {FormatCurrency(state[0])} - {FormatCurrency(state[1])}
      </Text>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  textBetween: {marginTop: 20},
  trackStyle: {height: 8},
  markHeight: {
    width: 5,
    height: 40,
    marginTop: 11,
    borderRadius: 4,
  },
});
export default SliderComponent;
