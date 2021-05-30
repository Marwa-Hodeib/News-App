import React from 'react'
import { Button, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';


const NewsSourceList = ({title}) => (
  <List.Item
    title={title}
    right={()=><Button title='View' onPress={()=>{console.log('waw')}}/>}
    style={styles.listStyle}

  />
    
)

const styles = StyleSheet.create({
  listStyle:{
    borderBottomColor: '#e1dce3',
    borderBottomWidth: 0.5
  }
})


export default NewsSourceList;