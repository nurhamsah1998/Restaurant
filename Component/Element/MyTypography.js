import React from 'react';
import {Text} from 'react-native-paper';
import {theme} from '../../App';

function MyTypography({title, variant, sx, ...props}) {
  /// this is func for pick variant size of button
  function TypographySizingVariant(params = 'titleMedium') {
    const typographySizeVariant = [
      {
        id: 'h1',
        value: 'displaySmall',
      },
      {
        id: 'h2',
        value: 'headlineLarge',
      },
      {
        id: 'h3',
        value: 'headlineMedium',
      },
      {
        id: 'h4',
        value: 'headlineSmall',
      },
      {
        id: 'h5',
        value: 'titleLarge',
      },
      {
        id: 'h6',
        value: 'titleMedium',
      },
    ];
    const variant = typographySizeVariant?.find(i => i.id === params) || 0;
    return variant.value;
  }
  return (
    <Text
      variant={TypographySizingVariant(variant)}
      style={{color: theme.colors.typography, ...sx}}
      {...props}>
      {title}
    </Text>
  );
}

export default MyTypography;
