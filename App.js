import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './navigation/tabs';
import DrawerRoute from './navigation/drawer';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <DrawerRoute /> */}
        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
