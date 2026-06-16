import React, { useState } from 'react';
import {
  View,
  Text
} from 'react-native';

import CustomInput from './CustomInput';
import LoginButton from './LoginButton';
import Message from './Message';
import styles from '../styles/styles';

export default function LoginForm({
  login,
  mensaje,
  esError
}) {

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Login
      </Text>

      <CustomInput
        placeholder="Usuario"
        value={usuario}
        onChangeText={setUsuario}
        style={styles.input}
      />

      <CustomInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />

      <LoginButton
        style={styles.boton}
        onPress={() =>
          login(usuario, password)
        }
      />

      <Text style={styles.link}>
        ¿Olvidaste la contraseña?
      </Text>

      <Text style={styles.link}>
        Crear cuenta
      </Text>

      <Message
        mensaje={mensaje}
        esError={esError}
      />

    </View>
  );
}