import React from 'react';
import HomeStack from './homestack';
import AboutStack from './aboutstack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HeaderShownContext } from '@react-navigation/elements';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator  >
        <Drawer.Screen name="Home" component={HomeStack} options={{ headerShown: false }}/>
        <Drawer.Screen name="About" component={AboutStack} options={{ headerShown: false }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
