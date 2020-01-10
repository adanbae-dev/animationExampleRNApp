import React, { Component } from 'react'
import {
    TouchableHighlight,
    View,
    Text,
    StyleSheet
} from 'react-native'
import Geolocation from '@react-native-community/geolocation'

let styles = {}

export default class Sample12 extends Component {
  static navigationOptions = (props) => {
    
    return {
      title: 'Geolocation API',
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
      originalCoords: {},
      updatedCoords: {} ,
      id : ''
    }
    this.clearWatch = this.clearWatch.bind(this)
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      (info) => {
        this.setState({originalCoords: info.coords})
      },
      (err) => console.log('err', err)
    )
    let id = Geolocation.watchPosition(
      (success) => {
        this.setState({
          id,
          updatedCoords : success.coords
        })
      },
      (err) => console.log('err', err)
    )
  }

  clearWatch() {
    Geolocation.clearWatch(this.state.id)
  }
  render() {
    const { originalCoords, updatedCoords } = this.state
    return (
      <View style={styles.container}>
        <Text>Original coordinates</Text>
        <Text>Latitude: {originalCoords.latitude}</Text>
        <Text>Longitude: {originalCoords.longitude}</Text>
        <Text>Updated coordinates</Text>
        <Text>Latitude: {updatedCoords.latitude}</Text>
        <Text>Longitude: {updatedCoords.longitude}</Text>
        <TouchableHighlight
          onPress={this.clearWatch}
          style={styles.button}>
            <Text>Clear Watch</Text>
          </TouchableHighlight>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20
  },
  button : {
    height: 60,
    marginTop: 15,
    backgroundColor: '#ededed',
    justifyContent: 'center',
    alignItems: 'center'
  }
})