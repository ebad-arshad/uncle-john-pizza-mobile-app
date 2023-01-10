import 'react-native-gesture-handler';
import DrawerNavigator from './navigators/Drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from "./store";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from 'react-native-paper';
import ChooseSizeScreen from './src/screens/ChooseSizeScreen';
import ChooseCrustScreen from './src/screens/ChooseCrustScreen';
import ChooseToppingsScreen from './src/screens/ChooseToppingsScreen';
import BucketScreen from './src/screens/BucketScreen';
import ThankScreen from './src/screens/ThankScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PaperProvider>
          <Stack.Navigator>
            <Stack.Screen name="Drawer" options={{ headerShown: false }} component={DrawerNavigator} />
            <Stack.Screen name="ChooseSizeScreen" options={{ headerShown: false }} component={ChooseSizeScreen} />
            <Stack.Screen name="ChooseCrustScreen" options={{ headerShown: false }} component={ChooseCrustScreen} />
            <Stack.Screen name="ChooseToppingsScreen" options={{ headerShown: false }} component={ChooseToppingsScreen} />
            <Stack.Screen name="BucketScreen" options={{ headerShown: false }} component={BucketScreen} />
            <Stack.Screen name="ThankScreen" options={{ headerShown: false }} component={ThankScreen} />
          </Stack.Navigator>
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
}