import React from 'react'
import {Text, View} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Details';
import configs from './config';


const TopPicks = () => {
  return(
    <Text>Top Picks</Text>
  )
}
const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator screenOptions={configs.screenOptions}>
       <Stack.Screen
        name="Top Picks"
        component={TopPicks}
        options={{ title: 'Top Picks' }}
        />
        <Stack.Screen
        name="Details"
        component={Details}
        options={{title: 'details'}}
        
        />
    </Stack.Navigator>
  
  )
}

export default Home
