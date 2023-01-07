import 'react-native-gesture-handler';
import DrawerNavigator from './navigators/Drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Drawer" options={{ headerShown: false }} component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}