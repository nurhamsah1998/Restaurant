import React from 'react';
import {TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function IconContained({
  size = 25,
  backgroundColor = '#fff',
  icon = 'star',
  iconColor = '#000',
}) {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        elevation: 8,
        shadowColor: '#000',
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AntDesign name={icon} size={size} color={iconColor} />
    </TouchableOpacity>
  );
}

export default IconContained;
