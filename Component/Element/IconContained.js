import React from 'react';
import {TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function IconContained({
  size = 30,
  backgroundColor = '#fff',
  icon = 'star',
  iconColor = '#000',
  sx,
  ...props
}) {
  return (
    <TouchableOpacity
      style={{
        width: size,
        height: size,
        borderRadius: 20,
        elevation: 8,
        shadowColor: '#000',
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
      {...props}>
      <AntDesign name={icon} size={size / 1.7} color={iconColor} />
    </TouchableOpacity>
  );
}

export default IconContained;
