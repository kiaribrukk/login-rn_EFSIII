import React, { useState } from 'react';
import { View } from 'react-native';
import LoginForm from './components/LoginForm';

export default function App() {

  const [mensaje, setMensaje] = useState('');
  const [esError, setEsError] = useState(false);

  const login = (usuario, password) => {

    if (!usuario || !password) {
      setMensaje('Debe completar todos los campos');
      setEsError(true);
      return;
    }

    if (
      usuario.trim() === 'admin' &&
      password.trim() === '1234'
    ) {
      setMensaje('Login exitoso');
      setEsError(false);
    } else {
      setMensaje(
        'Usuario o contraseña incorrectos, vuelva a intentar'
      );
      setEsError(true);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <LoginForm
        login={login}
        mensaje={mensaje}
        esError={esError}
      />
    </View>
  );
}