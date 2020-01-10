import React, { Component } from 'react'
import {
    View,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native'
let styles = {}

const { width, height } = Dimensions.get('window')


const windowWidth = Dimensions.get('window').width
const widthScreen = Dimensions.get('screen').width
const heightScreen = Dimensions.get('screen').height


export default class Sample9 extends Component {
  static navigationOptions = (props) => {
    
    return {
      title: 'Dimensions API',
      headerTitlesStyle : {
        color: 'white',
        fontSize: 30,
        fontWeight: '400'
      }
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>width : {width}</Text>
        <Text>height : {height}</Text>
        <Text>windowWidth : {windowWidth}</Text>
        <Text>widthScreen : {widthScreen}</Text>
        <Text>heightScreen : {heightScreen}</Text>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20
  }
})