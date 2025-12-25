import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

function RutinasHome() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Rutinas</Text>
    </View>
  );
}

export default function RutinasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RutinasHome"
        component={RutinasHome}
        options={{ title: 'Rutinas' }}
      />
    </Stack.Navigator>
  );
}
