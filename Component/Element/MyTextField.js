import React from 'react';
import {TextInput} from 'react-native-paper';

function MyTextField({variant = 'outlined', size, sx, ...props}) {
  return (
    <TextInput style={{borderRadius: 5, ...sx}} mode={variant} {...props} />
  );
}

export default MyTextField;
