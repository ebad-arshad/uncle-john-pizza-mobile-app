import 'react-native-gesture-handler';
import DrawerNavigator from './navigators/Drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChooseSize from './src/screens/ChooseSize';
import store from "./store";
import { Provider } from "react-redux";
import ChooseCrust from './src/screens/ChooseCrust';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Drawer" options={{ headerShown: false }} component={DrawerNavigator} /> */}
          {/* <Stack.Screen name="ChooseSize" options={{ headerShown: false }} component={ChooseSize} /> */}
          <Stack.Screen name="ChooseCrust" options={{ headerShown: false }} component={ChooseCrust} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}