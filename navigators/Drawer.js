import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerUI from '../src/components/DrawerUI';
import HomeScreen from '../src/screens/HomeScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerUI {...props} />}>
            <Drawer.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    );
}