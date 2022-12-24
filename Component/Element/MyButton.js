import React from 'react';
import {Button, Text, ActivityIndicator, MD2Colors} from 'react-native-paper';
import {theme} from '../../App';

function MyButton({
  variant = 'outlined',
  title = 'text here',
  size,
  sx,
  color = 'primary',
  ...props
}) {
  /// this is func for pick variant size of button
  return (
    <Button
      style={{
        backgroundColor: theme.colors[color],
        borderRadius: 5,
        ...sx,
      }}
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
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
    </Button>
  );
}

export default MyButton;
