import React, { Component } from 'react'
import {
    TextInput,
    Clipboard,
    TouchableHighlight,
    getString,
    View,
    Text,
    StyleSheet,
    TextInputComponent
} from 'react-native'
let styles = {}

export default class Sample9 extends Component {
  static navigationOptions = (props) => {
    
    return {
      title: 'Clipboard API',
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
      clipboardData : []
    }

    this.pushClipboardToArray = this.pushClipboardToArray.bind(this)
  }
  componentDidMount() {
    Clipboard.setString('Hello World! ')
  }

  updateClipboard(string) {
    Clipboard.setString(string)
  }

  async pushClipboardToArray() {
    const { clipboardData } = this.state
    var content = await Clipboard.getString()

    clipboardData.push(content)
    
    this.setState({clipboardData})
  }
  render() {
    const { clipboardData } = this.state
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Testing Clipboard</Text>
        <TextInput style={styles.input}
          onChangeText={(text) => this.updateClipboard(text)} />
        <TouchableHighlight
          onPress={this.pushClipboardToArray}
          style={styles.button}>
          <Text>Click to Add to Array</Text>
        </TouchableHighlight>
        {
          clipboardData.map((d, i) => {
            return <Text key={i}> {d}</Text>
          })
        }
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
  input: {
    padding: 10,
    marginTop: 15,
    height: 60,
    backgroundColor: '#dddddd'
  },
  button: {
    justifyContent: 'center',
    marginTop: 15,
    alignItems: 'center',
    height: 60,
    backgroundColor: '#dddddd'
  }
  
})