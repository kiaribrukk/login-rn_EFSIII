import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const login = () => {
    if (usuario === 'admin' && password === '1234') {
      setMensaje('Inicio de sesión exitoso');
    } else {
      setMensaje(
        'Usuario o contraseña incorrectos, vuelva a intentar'
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.boton}
        onPress={login}
      >
        <Text style={styles.textoBoton}>
          Ingresar
        </Text>
      </TouchableOpacity>

      <Text style={styles.mensaje}>
        {mensaje}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  boton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
  },

  mensaje: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});