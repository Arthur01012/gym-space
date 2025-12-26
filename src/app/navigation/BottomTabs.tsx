import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import RutinasStack from './RutinasStack';
import AlimentacionStack from './AlimentacionStack';
import PerfilStack from './PerfilStack';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: '#fff',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === 'RutinasTab') {
            iconName = focused ? 'barbell' : 'barbell-outline';
          } 
          if (route.name === 'AlimentacionTab') {
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          } 
          if (route.name === 'PerfilTab') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          return <Ionicons name={iconName} size={30} color={focused ? '#000' : '#999'} />;
        },
      })}
    >
      <Tab.Screen name="RutinasTab" component={RutinasStack} />
      <Tab.Screen name="AlimentacionTab" component={AlimentacionStack} />
      <Tab.Screen name="PerfilTab" component={PerfilStack} />
    </Tab.Navigator>
  );
}
