import React from 'react';
import {TextInput, Text} from 'react-native-paper';
import {theme} from '../../App';

function MyTextField({
  variant = 'outlined',
  size,
  sx,
  secure = false,
  height = 90,
  fontSize = 16,
  roundness = 5,
  leftIcon = false,
  rightIcon = false,
  placeholder,
  onPressRightIcon,
  ...props
}) {
  return (
    <TextInput
      /// stackoverflow START
      /// question : https://stackoverflow.com/questions/29337444/how-do-you-style-a-textinput-in-react-native-for-password-input
      /// answered by Riley Bracken : https://stackoverflow.com/users/1770189/riley-bracken
      secureTextEntry={secure}
      /// stackoverflow END
      outlineColor={theme.colors.divider}
      /// stackoverflow START
      /// question : https://stackoverflow.com/questions/44739331/change-react-native-textinputs-placeholder-color
      /// answered by Ray : https://stackoverflow.com/users/5841629/ray
      placeholderTextColor={theme.colors.divider}
      /// stackoverflow END
      theme={{roundness}}
      placeholder={placeholder}
      style={{marginTop: -6, fontSize, ...sx}}
      mode={variant}
      left={leftIcon && <TextInput.Icon icon={leftIcon} />}
      right={
        rightIcon && (
          <TextInput.Icon onPress={onPressRightIcon} icon={rightIcon} />
        )
      }
      {...props}
    />
  );
}

export default MyTextField;
