import { View, Text, TouchableOpacity } from 'react-native';
import { useUserStore } from '../store';

export default function LoginScreen() {
  const login = useUserStore((state) => state.login);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: '600' }}>
        Gym Space
      </Text>

      <TouchableOpacity
        onPress={login}
        style={{
          backgroundColor: '#000',
          paddingHorizontal: 30,
          paddingVertical: 12,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16 }}>
          Iniciar sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
}