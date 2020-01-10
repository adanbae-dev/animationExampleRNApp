import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Animated,
} from 'react-native'

export default class Sample4 extends Component {
  static navigationOptions = (props) => {
    
    return {
      title: '순차적인 애니메이션 만들기',
      headerTitlesStyle : {
        color: 'white',
        fontSize: 30,
        fontWeight: '400'
      }
    }
  }

  animatedValue1 = new Animated.Value(-30)
  animatedValue2 = new Animated.Value(-30)
  animatedValue3 = new Animated.Value(-30)

  componentDidMount() {
    this.animate()
  }

  // 세 개의 애니메이션이 동시에 실행되도록 Animated.parallel 호출하고 세 개의 Animated.timing 을 전달
  animate = () => {
    const createdAnimation = (value) =>{
      return Animated.timing(
        value, {
          toValue: 290,
          duration: 500
        }
      )
    }
    
    Animated.sequence([
      createdAnimation(this.animatedValue1),
      createdAnimation(this.animatedValue2),
      createdAnimation(this.animatedValue3),
    ]).start()
  }
  render() {
    
    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.text, {marginTop: this.animatedValue1}]}>
          1
        </Animated.Text>
        <Animated.Text style={[styles.text, {marginTop: this.animatedValue2}]}>
          2
        </Animated.Text>
        <Animated.Text style={[styles.text, {marginTop: this.animatedValue3}]}>
          3
        </Animated.Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  text: {
    marginHorizontal: 20,
    fontSize: 26
  }
})