import React from 'react';
import { Text, SafeAreaView, ScrollView, Image, StyleSheet, View } from 'react-native';
import { Headline, Caption,Divider, Paragraph } from 'react-native-paper';




const Details = ({route}) => {

  const {  title, imageSource, content, date, source, author   } = route.params;

  return( 
    <SafeAreaView>
      <ScrollView>
        <View style={styles.padding}>
        <Headline style={styles.alignment}>{title}</Headline>
        <Divider/>
        <Text style={styles.alignment} >{author}</Text>
        <Caption style={styles.alignment}>{date} / {source}</Caption>
        </View>
        <Image
        style={styles.image}
        source={{uri: imageSource ? imageSource : 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/3/3/2/7/237233-6-eng-GB/Cosmoprof-Asia-Ltd-SIC-Cosmetics-20132_news_large.jpg'}} >
        </Image>
        <Paragraph style={[styles.alignment,styles.padding]}>{content}</Paragraph>   
       
        
      </ScrollView>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create ({
  image:{
    width: "100%",
    height: 200,
    resizeMode: 'contain'
  },
  alignment: {
    textAlign: 'right'
  },
  padding:{
    padding: 20
  }
})


export default Details;