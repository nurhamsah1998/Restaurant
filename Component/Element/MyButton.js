import React from 'react';
import {Button, Text, ActivityIndicator, MD2Colors} from 'react-native-paper';
import {theme} from '../../App';

function MyButton({
  mode = 'outlined',
  title = 'text here',
  sx,
  color = 'primary',
  disabled,
  small = false,
  ...props
}) {
  /// this is func for pick variant size of button
  const isOutled = mode.includes('outlined')
    ? theme.colors[color]
    : theme.colors.secondary;
  return (
    <Button
      contentStyle={{height: small ? 40 : 55}}
      style={{
        borderRadius: 5,
        borderColor: disabled ? theme.colors.backdrop : isOutled,
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
      disabled={disabled}
      {...props}>
      {title}
    </Button>
  );
}

export default MyButton;
