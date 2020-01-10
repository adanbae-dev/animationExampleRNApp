import React, { Component } from 'react'
import {
    TouchableHighlight,
    View,
    Text,
    StyleSheet,
    Alert
} from 'react-native'

let styles = {}

export default class Sample4 extends Component {
  static navigationOptions = (props) => {
    
    return {
      title: '일정간격 실행 애니메이션',
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
      showMessage: false
    }
    this.showAlert = this.showAlert.bind(this)
  }

  showAlert() {
    Alert.alert(
      'Title',
      'Message!',
      [
        {
          text: 'cancel',
          onPress: () => console.log('Dismiss called...'),
          style: 'destructive'
        },
        {
          text : 'Show Message',
          onPress: () => this.setState({showMessage: true})
        }
      ]
    )
  }

  render() {
    const { showMessage } = this.state
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress= {this.showAlert} style={styles.button}>
          <Text>Show Alert</Text>
        </TouchableHighlight>
        {
          showMessage && <Text>Showing message - success</Text>
        }
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed'
  }
})