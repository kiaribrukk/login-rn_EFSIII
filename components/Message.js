import React from 'react';
import { Text } from 'react-native';
import styles from '../styles/styles';

export default function Message({
  mensaje,
  esError
}) {
  return (
    <Text
      style={[
        styles.mensaje,
        {
          color: esError
            ? 'red'
            : 'green'
        }
      ]}
    >
      {mensaje}
    </Text>
  );
}