import React, { Component } from 'react'
import {
    TouchableHighlight,
    View, 
    Text,
    StyleSheet
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

let styles = {}


const person = {
  name : 'James Garfield',
  age: 50,
  occupation: 'President of the United States'
}

const key = 'president'

export default class Sample9 extends Component {
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
  constructor() {
    super()
    this.state = {
      person: {}
    }

    this.getPerson = this.getPerson.bind(this)
  }

  // componentDidMount() {
  //   AsyncStorage.setItem(key, JSON.stringify(person))
  //   .then((res)=> console.log('item stored..'))
  //   .catch((err)=> console.log('err : ', err))
  // }

  // getPerson() {
  //   AsyncStorage.getItem(key)
  //   .then((res)=> this.setState({person: JSON.parse(res)}))
  //   .catch((err)=> console.log('err : ', err))
  // }

  async componentDidMount() {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(person))
      console.log('item stored')
    } catch (error) {
      console.log('error', error)
    }
  }

  async getPerson() {
    try {
      var data = await AsyncStorage.getItem(key)
      var person = await data
      this.setState({person: JSON.parse(person)})
    } catch (error) {
      console.log('error', error)
    }
  }


  render() {
    const { person } = this.state
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Testing AsyncStorage</Text>
        <TouchableHighlight onPress={this.getPerson} style={styles.button}>
          <Text>Get President</Text>
        </TouchableHighlight>
        <Text>{person.name}</Text>
        <Text>{person.age}</Text>
        <Text>{person.occupation}</Text>
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
  button: {
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    height: 55,
    backgroundColor: '#dddddd'
  }
  
})