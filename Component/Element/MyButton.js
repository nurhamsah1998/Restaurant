import React from 'react';
import {Button, Text} from 'react-native-paper';

function MyButton({
  variant = 'outlined',
  title = 'text here',
  size,
  sx,
  ...props
}) {
  /// this is func for pick variant size of button
  function ButtonSizingVariant(params = 'small') {
    const buttonSizeVariant = [
      {
        id: 'small',
        value: 0,
      },
      {
        id: 'medium',
        value: 5,
      },
      {
        id: 'large',
        value: 10,
      },
    ];
    const variant = buttonSizeVariant?.find(i => i.id === params) || 0;
    return variant.value;
  }
  return (
    <Button
      style={{
        borderRadius: 5,
        maxHeight: 80,
        ...sx,
      }}
      uppercase
      mode={variant}
      {...props}>
      {title}
    </Button>
  );
}

export default MyButton;
