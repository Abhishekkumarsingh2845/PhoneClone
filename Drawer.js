import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Screen/Home";
import History from "./Screen/History";


const Drawer = createDrawerNavigator();

const Draw = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Screen1">
        <Drawer.Screen name="Screen1" component={Home} />
        <Drawer.Screen name="Screen2" component={History} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Draw;
