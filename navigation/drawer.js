import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../src/screens/Login';
import About from '../src/screens/About';

const Drawer = createDrawerNavigator();

export default function DrawerRoute() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="About" component={About}/>
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}