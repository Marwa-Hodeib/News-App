import React from 'react'
import {View, Text} from 'react-native'
import Details from './Details';
import { createStackNavigator } from '@react-navigation/stack';
import configs from './config';


const Stack = createStackNavigator();

const ViewedNews = () => {
  return(
    <Text>History</Text>
  )
}

const History = () => {
  return (
    <Stack.Navigator  screenOptions={configs.screenOptions}>
    <Stack.Screen
     name="Viewed News"
     component={ViewedNews}
     options={{ title: 'History' }}
     />
     <Stack.Screen
     name="Details"
     component={Details}
     options={{title: 'details'}}
     
     />
 </Stack.Navigator>

  )
}

export default History
