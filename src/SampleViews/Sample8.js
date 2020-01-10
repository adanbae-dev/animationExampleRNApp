import React, { Component } from 'react'
import {
    AppState,
    View,
    Text,
    StyleSheet,
} from 'react-native'

let styles = {}

export default class Sample8 extends Component {
  static navigationOptions = (props) => {
    
    return {
      title: 'AppState API',
      headerTitlesStyle : {
        color: 'white',
        fontSize: 30,
        fontWeight: '400'
      }
    }
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange)
  }

  handleAppStateChange(currentAppState) {
    console.log('currentAppState : ', currentAppState)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Testing App State</Text>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  
})