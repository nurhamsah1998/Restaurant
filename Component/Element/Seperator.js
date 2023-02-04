import React from 'react';
import {View, StyleSheet} from 'react-native';

function Seperator() {
  const style = StyleSheet.create({
    seperator: {
      width: 10,
    },
  });
  return <View style={style.seperator} />;
}

export default Seperator;
