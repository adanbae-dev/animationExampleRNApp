import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Animated,
} from 'react-native'

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
    this.animatedValues= []
    for(let i = 0; i < 1000; i++) {
      this.animatedValues[i] = new Animated.Value(0)
    }
    this.animations = this.animatedValues.map(value => {
      return Animated.timing(
        value,
        {
          toValue: 1,
          duration: 6000,
        }
      )
    })
  }

  componentDidMount() {
    this.animate()
  }

  // 세 개의 애니메이션이 동시에 실행되도록 Animated.parallel 호출하고 세 개의 Animated.timing 을 전달
  animate = () => {
    Animated.stagger(15, this.animations).start()
  }
  render() {
    
    return (
      <View style={styles.container}>
      {
        this.animatedValues.map((value, index) => (
          <Animated.View key={index} style={[{opacity: value}, styles.box]} />
        ))
      }
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  box: {
    width: 15,
    height: 15,
    margin: .5,
    backgroundColor: 'red'
  }
})