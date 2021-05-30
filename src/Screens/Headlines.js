import React,{useEffect, useState} from 'react'
import {Text, View , SafeAreaView, ScrollView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Details';
import configs from './config';
import {getTopHeadlines} from '../API';
import HomeCard from '../Components/HomeCard';
import { useIsFocused } from '@react-navigation/native';




const TopPicks = ({navigation,source, history}) => {
  const isFocused = useIsFocused();
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  },[isFocused])

  const getData = async() =>{
    const results = await getTopHeadlines(source, history)
    if (results.articles) {
      setData(results.articles)
    }
   
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
         navigation={navigation}
         author={article.author}
         history={history}
         />
        })}
      </View>
      </ScrollView>
    </SafeAreaView>

  )
}

const Stack = createStackNavigator();

const Headlines = ({route}) => {

  const title = route.params?.title;
  const history = route.params?.history;

  let headerTitle = `Today's Picks`
  if (title) {
    headerTitle = title
  }

  if (history) {
    headerTitle = 'History'
  }

  return (
    <Stack.Navigator screenOptions={configs.screenOptions}>
       <Stack.Screen
        name="Today Picks"
        options={{ title: headerTitle }}
        >
          {(props) => <TopPicks {...props} source={title} history={history}/>}
        </Stack.Screen>
        <Stack.Screen
        name="Details"
        component={Details}
        options={{title: ''}}
        />
    </Stack.Navigator>
  
  )
}

export default Headlines

