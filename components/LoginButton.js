import React from 'react';
import {
  TouchableOpacity,
  Text
} from 'react-native';

import styles from '../styles/styles';

export default function LoginButton({
  onPress,
  style
}) {
  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
    >
      <Text style={styles.textoBoton}>
        Ingresar
      </Text>
    </TouchableOpacity>
  );
}