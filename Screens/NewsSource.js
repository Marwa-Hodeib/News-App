import React from 'react'
import {View, Text} from 'react-native'
import Details from './Details';
import { createStackNavigator } from '@react-navigation/stack';
import configs from './config';


const Stack = createStackNavigator();

const OtherNews = () => {
  return(
    <Text>News Source</Text>
  )
}

const NewsSource = () => {
  return (
    <Stack.Navigator screenOptions={configs.screenOptions}>
    <Stack.Screen
     name="Other News"
     component={OtherNews}
     options={{ title: 'News Source' }}
     />
     <Stack.Screen
     name="Details"
     component={Details}
     options={{title: 'details'}}
     
     />
 </Stack.Navigator>
  )
}

export default NewsSource
