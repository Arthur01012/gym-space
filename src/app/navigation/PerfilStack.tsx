import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../features/usuario/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function PerfilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
