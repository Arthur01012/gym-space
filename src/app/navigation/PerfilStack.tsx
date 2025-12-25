import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

function PerfilHome() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Perfil</Text>
    </View>
  );
}

export default function PerfilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PerfilHome"
        component={PerfilHome}
        options={{ title: 'Perfil' }}
      />
    </Stack.Navigator>
  );
}
