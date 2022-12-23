import React from 'react';
import {Button, Text} from 'react-native-paper';
import {View, TouchableOpacity} from 'react-native';
import {theme} from '../../App';

function MyButton({
  variant = 'outlined',
  title = 'text here',
  size,
  sx,
  bgColor = 'primary',
  ...props
}) {
  /// this is func for pick variant size of button
  function ButtonSizingVariant(bgColor) {
    const buttonSizeVariant = [
      {
        id: 'primary',
        value: theme.colors.greenTeal,
      },
      {
        id: 'secondary',
        value: theme.colors.secondary,
      },
      {
        id: 'onther',
        value: theme.colors.divider,
      },
    ];
    const variant = buttonSizeVariant?.find(i => i.id === bgColor) || 0;
    return variant.value;
  }
  return (
    <TouchableOpacity
      style={{
        backgroundColor: ButtonSizingVariant(bgColor),
        padding: 20,
        borderRadius: 12,
        ...sx,
      }}
      uppercase
      mode={variant}
      {...props}>
      <Text
        variant="titleLarge"
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          textTransform: 'capitalize',
          color: theme.colors.white,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default MyButton;
