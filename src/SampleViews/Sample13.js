import React, { Component } from 'react'
import {
    TouchableHighlight,
    Keyboard,
    TextInput,
    View,
    Text,
    StyleSheet
} from 'react-native'

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

  componentWillMount() {
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', () => this.logEvent('keyboardWillShow'))
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => this.logEvent('keyboardDidShow'))
    this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', () => this.logEvent('keyboardWillHide'))
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => this.logEvent('keyboardDidHide'))
    this.keyboardWillChangeFrameListener = Keyboard.addListener('keyboardWillChangeFrame', () => this.logEvent('keyboardwillChangeFrame'))
    this.keyboardDidChangeFrameListener = Keyboard.addListener('keyboardDidChangeFrame', () => this.logEvent('keyboardDidChnageFrame'))
  }

  logEvent(event){
    console.log('event : ', event)
  }

  dismissKeyboard() {
    Keyboard.dismiss()
  }

  removeListeners() {
    Keyboard.removeAllListeners('keyboardWillShow')
    Keyboard.removeAllListeners('keyboardDidShow')
    Keyboard.removeAllListeners('keyboardWillHide')
    Keyboard.removeAllListeners('keyboardDidHide')
    Keyboard.removeAllListeners('keyboardWillChangeFrame')
    Keyboard.removeAllListeners('keyboardDidChangeFrame')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} />
        <TouchableHighlight
          onPress={this.dismissKeyboard}
          style={styles.button}>
          <Text>Dismiss Keyboard</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.removeListeners}
          style={styles.button}>
          <Text>Remove Listeners</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 150
  },
  input: {
    margin: 10,
    backgroundColor: '#ededed',
    height: 50,
    padding: 10
  },
  button : {
    height: 50,
    margin: 10, 
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center'
  }
})