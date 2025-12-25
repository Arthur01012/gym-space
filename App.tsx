import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import BottomTabs from './src/app/navigation/BottomTabs';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <BottomTabs />
    </NavigationContainer>
  );
}
