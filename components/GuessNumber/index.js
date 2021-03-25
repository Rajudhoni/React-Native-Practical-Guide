import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from './Header';
import StartGame from './screens/StartGameScreen';
const index = () => {
    return (
        <View style={styles.root}>
          <Header title="Guess a Number" />
          <StartGame/>
        </View>
      )
}

export default index


const styles = StyleSheet.create({
    root: {
      flex: 1,
      
    }
  })
  