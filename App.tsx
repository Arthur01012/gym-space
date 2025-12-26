import { NavigationContainer } from '@react-navigation/native';

import BottomTabs from './src/app/navigation/BottomTabs';
import AuthStack from './src/app/navigation/AuthStack';
import { useUserStore } from './src/features/usuario/store';

export default function App() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <BottomTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}
