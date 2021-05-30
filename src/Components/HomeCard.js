import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';



const HomeCard = ({title, imageSource, date, content,  source}) => (
  <Card>
    <Card.Cover source={{ uri: imageSource }} />
    <Card.Content>
      <Title style={styles.alignment}>{title}</Title>
      <Paragraph style={styles.alignment}>{content}</Paragraph>
      <Text style={styles.alignment}>{source}</Text>
      <Text style={styles.alignment}>{date}</Text>
    </Card.Content>
  </Card>
)

const styles = StyleSheet.create({
  alignment: {
    textAlign: 'right'
  }
})





export default HomeCard;