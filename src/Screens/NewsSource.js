import React, {useState, useEffect} from 'react'
import {View, SafeAreaView,ScrollView} from 'react-native'
import Details from './Details';
import { createStackNavigator } from '@react-navigation/stack';
import configs from './config';
import {getNewsSources} from '../fetch';
import NewsSourceList from '../Components/NewsSourceList';



const Stack = createStackNavigator();

const OtherNews = () => {
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
