import React from 'react';
import {TextInput} from 'react-native-paper';

function MyTextField({variant = 'outlined', size, sx, ...props}) {
  return (
    <TextInput
      style={{borderRadius: 5, height: 55, fontSize: 20, ...sx}}
      mode={variant}
      {...props}
    />
  );
}

export default MyTextField;
