import React from 'react'
import {View, Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import configs from './config';
import Headlines from './Headlines';


const Stack = createStackNavigator();

const History = () => {
  return (
    <Stack.Navigator  screenOptions={configs.screenOptions}>
    <Stack.Screen
     name="Viewed News"
     component={Headlines}
     options={{ headerShown: false }}
     initialParams={{history: true}}
     />
 </Stack.Navigator>

  )
}

export default History
