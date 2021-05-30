import React, {useState, useEffect} from 'react'
import {View, SafeAreaView,ScrollView} from 'react-native'
import Details from './Details';
import { createStackNavigator } from '@react-navigation/stack';
import configs from './config';
import {getNewsSources} from '../fetch';
import NewsSourceList from '../Components/NewsSourceList';
import Headlines from './Headlines';



const Stack = createStackNavigator();

const Sources = ({navigation}) => {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    getSources()
  },[])

  const getSources = async () => {
    const results = await getNewsSources();
    setSources(results.sources)
  }
  return(
    <SafeAreaView>
    <ScrollView>
    {sources.map((source) => {
      return <NewsSourceList 
      key={source.id}
      title={source.name}
      navigation={navigation}
      />
    })}
    </ScrollView>
    </SafeAreaView>
  )
}


const NewsSource = () => {
  return (
    <Stack.Navigator screenOptions={configs.screenOptions}>
    <Stack.Screen
     name="Other News"
     component={Sources}
     options={{ title: 'News Source' }}

     />
     <Stack.Screen
     name="Headlines"
     component={Headlines}
     options={{headerShown: false}}
     
     />
 </Stack.Navigator>
  )
}

export default NewsSource
