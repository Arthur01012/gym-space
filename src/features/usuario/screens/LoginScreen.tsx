import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { useUserStore } from '../store';

type Mode = 'login' | 'register';

export default function LoginScreen() {
  const register = useUserStore((state) => state.register);
  const login = useUserStore((state) => state.login);

  const [mode, setMode] = useState<Mode>('login');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    if (mode === 'register') {
      if (!username || !email) {
        Alert.alert('Faltan datos', 'Completa todos los campos');
        return;
      }

      await register({
        username,
        email,
      });

      return;
    }

    // LOGIN
    const success = await login();

    if (!success) {
      Alert.alert(
        'Sin cuenta',
        'No hay ninguna cuenta registrada en este dispositivo'
      );
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        gap: 16,
      }}
    >
      <Text
        style={{
          fontSize: 34,
          fontWeight: '800',
          textAlign: 'center',
        }}
      >
        Gym Space
      </Text>

      <Text
        style={{
          textAlign: 'center',
          fontSize: 14,
          color: '#666',
          marginBottom: 12,
        }}
      >
        {mode === 'login'
          ? 'Vuelve a tu espacio'
          : 'Crea tu espacio personal'}
      </Text>

      {mode === 'register' && (
        <TextInput
          placeholder="Nombre de usuario"
          value={username}
          onChangeText={setUsername}
          style={inputStyle}
        />
      )}

      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={inputStyle}
      />

      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          backgroundColor: '#000',
          paddingVertical: 14,
          borderRadius: 12,
          alignItems: 'center',
          marginTop: 8,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16 }}>
          {mode === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setMode((prev) => (prev === 'login' ? 'register' : 'login'))
        }
      >
        <Text
          style={{
            textAlign: 'center',
            color: '#555',
            marginTop: 12,
          }}
        >
          {mode === 'login'
            ? '¿No tienes cuenta? Crear una'
            : '¿Ya tienes cuenta? Iniciar sesión'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const inputStyle = {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 12,
  padding: 14,
};
