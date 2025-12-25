import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

function AlimentacionHome() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Alimentación</Text>
    </View>
  );
}

export default function AlimentacionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AlimentacionHome"
        component={AlimentacionHome}
        options={{ title: 'Alimentación' }}
      />
    </Stack.Navigator>
  );
}
