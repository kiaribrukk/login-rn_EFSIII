import React from 'react';
import { TextInput } from 'react-native';

export default function CustomInput({
  style,
  placeholder,
  value,
  onChangeText,
  secureTextEntry
}) {
  return (
    <TextInput
      style={style}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
}