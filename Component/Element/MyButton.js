import React from 'react';
import {Button, Text, ActivityIndicator, MD2Colors} from 'react-native-paper';
import {theme} from '../../App';

function MyButton({
  mode = 'outlined',
  title = 'text here',
  size,
  sx,
  color = 'primary',
  ...props
}) {
  /// this is func for pick variant size of button
  return (
    <Button
      contentStyle={{height: 55}}
      style={{
        borderRadius: 5,
        borderColor: mode.includes('outlined')
          ? theme.colors[color]
          : theme.colors.secondary,
        ...sx,
      }}
      mode={mode}
      buttonColor={
        mode.includes('outlined')
          ? theme.colors.background
          : theme.colors[color]
      }
      textColor={
        mode.includes('outlined') ? theme.colors[color] : theme.colors.white
      }
      uppercase={false}
      {...props}>
      {title}
    </Button>
  );
}

export default MyButton;
