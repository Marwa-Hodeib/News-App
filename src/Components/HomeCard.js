import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import {storeData} from '../API';


const HomeCard = ({title, imageSource, date, content,  source, navigation, author, history}) => {

  const data = {
    title:title, 
    urlToImage:imageSource,
    description:content,
    publishedAt:date,
    source:{name: source},
    author:author 
  }

  const onClick = async () => {
    if (!history) {
      await storeData(data)
    }
    navigation.navigate('Details', {
      title:title, 
      imageSource:imageSource,
      content:content,
      date:date,
      source:source, 
      author:author 
    })
  }

  return(

    <Card style={styles.card} elevation={3} onPress={async()=>await onClick()}
    >
      <Card.Cover source={{ uri: imageSource ? imageSource : 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/3/3/2/7/237233-6-eng-GB/Cosmoprof-Asia-Ltd-SIC-Cosmetics-20132_news_large.jpg'}} />
      <Card.Content >
        <Title style={styles.alignment}>{title}</Title>
        <Paragraph style={styles.alignment}>{content}</Paragraph>
        <Text style={styles.alignment}>{source}</Text>
        <Text style={styles.alignment}>{date}</Text>

      </Card.Content>
    </Card>
  )}

const styles = StyleSheet.create({
  alignment: {
    textAlign: 'center'
  },
  card:{
    marginTop: 10,
    marginBottom: 10
  }
})





export default HomeCard;