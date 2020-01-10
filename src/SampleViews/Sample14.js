import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import NetInfo from '@react-native-community/netinfo'

let styles = {}

export default class Sample13 extends Component {
  static navigationOptions = (props) => {
    return {
      title: 'Keyboard API',
      headerTitlesStyle : {
        color: 'white',
        fontSize: 30,
        fontWeight: '400'
      }
    }
  }
  constructor() {
    super()
    this.state = {
      connectionInfo: {}
    }
  }
  
  componentDidMount() {
    NetInfo.fetch().then(connectionInfo => {
      console.log("Connection Type", connectionInfo.type)
      console.log("Is connected?", connectionInfo.isConnected)
      this.setState(connectionInfo)
    })

    NetInfo.addEventListener(connectionInfo => {
      console.log("Changed Connection Type", connectionInfo.type)
      console.log("Is connected?", connectionInfo.isConnected)
      this.setState(connectionInfo)
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.type}</Text>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
})