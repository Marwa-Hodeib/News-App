import React from 'react';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import NewsSource from '../Screens/NewsSource';
import History from '../Screens/History';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();


const TabNavigation = () => {
  return(
  <Tab.Navigator
  tabBarOptions={
    {
      showLabel:false,
      inactiveTintColor:'#e1dce3',
      activeTintColor:'#c603fc',
    }
  }
   screenOptions={({ route }) => (
     {
       tabBarIcon: ({ focused, color, size })=>{
        let iconName;

        if (route.name === 'Home') {
            iconName = 'home'
          
        } else if (route.name === 'NewsSource') {
          iconName = 'newspaper-o'

        }else if (route.name === 'History'){
          iconName = 'history'
        }
          return <Icon name={iconName} size={25} color={color} />;
       }}
   
    )}>
    
  <Tab.Screen name="Home" component={Home} />
  <Tab.Screen name="NewsSource" component={NewsSource} />
  <Tab.Screen name="History" component={History} />
  </Tab.Navigator>
  )}

  export default TabNavigation