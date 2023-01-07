import React from 'react';
import {Text} from 'react-native-paper';
import {theme} from '../../App';

function MyTypography({title, variant, sx, ...props}) {
  return (
    <Text style={{color: theme.colors.typography, ...sx}} {...props}>
      {title}
    </Text>
  );
}

export default MyTypography;
