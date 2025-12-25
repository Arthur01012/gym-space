import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RutinasStack from './RutinasStack';
import AlimentacionStack from './AlimentacionStack';
import PerfilStack from './PerfilStack';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="RutinasTab"
        component={RutinasStack}
        options={{ title: 'Rutinas' }}
      />

      <Tab.Screen
        name="AlimentacionTab"
        component={AlimentacionStack}
        options={{ title: 'Alimentación' }}
      />

      <Tab.Screen
        name="PerfilTab"
        component={PerfilStack}
        options={{ title: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}
