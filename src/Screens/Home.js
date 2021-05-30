import React,{useEffect, useState} from 'react'
import {Text, View , SafeAreaView, ScrollView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Details';
import configs from './config';
import {getTopHeadlines} from '../fetch';
import HomeCard from '../Components/HomeCard';




const TopPicks = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  },[])

  const getData = async() =>{
    const results = await getTopHeadlines()
    setData(results.articles)
  }

  return(
    <SafeAreaView>
      <ScrollView>
      <View>
        {data.map((article, index) => {
         return <HomeCard key={index}
         title={article.title}
         content={article.description}
         source={article.source.name}
         date={article.publishedAt}
         imageSource={article.urlToImage}
         />
        })}
      </View>
      </ScrollView>
    </SafeAreaView>

  )
}

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator screenOptions={configs.screenOptions}>
       <Stack.Screen
        name="Today Picks"
        component={TopPicks}
        options={{ title: `Today's Picks` }}
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
