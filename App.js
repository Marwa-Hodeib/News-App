import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Navigation/TabNavigation';






export default function App() {
  return (
    <NavigationContainer>
     <TabNavigation/>
    </NavigationContainer>
  );
}