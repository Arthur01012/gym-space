import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useUserStore } from './src/features/usuario/store';
import BottomTabs from './src/app/navigation/BottomTabs';
import LoginScreen from './src/features/usuario/screens/LoginScreen';
import { View, ActivityIndicator } from 'react-native';

export default function App() {
  const { isLoggedIn, hydrate } = useUserStore();

  useEffect(() => {
    hydrate();
  }, []);

  // Loader mientras verifica storage
  if (isLoggedIn === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <BottomTabs /> : <LoginScreen />}
    </NavigationContainer>
  );
}
