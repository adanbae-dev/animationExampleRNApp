import React, { Component } from 'react'
import {
    Easing,
    StyleSheet,
    View,
    Animated,
    Text,
    TouchableHighlight
} from 'react-native'

export default class Sample4 extends Component {
  static navigationOptions = (props) => {
    
    return {
      title: '애니메이션 효과 적용 시작화면',
      headerTitlesStyle : {
        color: 'white',
        fontSize: 30,
        fontWeight: '400'
      }
    }
  }

  animatedTitle = new Animated.Value(-200)
  animatedSubtitle = new Animated.Value(600)
  animatedButton = new Animated.Value(800)

  componentDidMount() {
    this.animate()
  }

  // 세 개의 애니메이션이 동시에 실행되도록 Animated.parallel 호출하고 세 개의 Animated.timing 을 전달
  animate = () => {
    Animated.parallel([
      Animated.timing(
        this.animatedTitle,
        {
          toValue: 200,
          duration: 800,
        }
      ),
      Animated.timing(
        this.animatedSubtitle,
        {
          toValue: 0,
          duration: 1400,
          delay: 800
        }
      ),
      Animated.timing(
        this.animatedButton,
        {
          toValue: 0,
          duration: 1000,
          delay: 2200
        }
      )
    ]).start()
    
  }
  render() {
    
    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.title, {marginTop: this.animatedTitle}]}>
          Welcome
        </Animated.Text>
        <Animated.Text style={[styles.subTitle, {marginLeft: this.animatedSubtitle}]}>
          Thanks for visiting our app!
        </Animated.Text>
        <Animated.View style={{ marginTop: this.animatedButton}}>
          <TouchableHighlight style={styles.button}>
            <Text>Get Started</Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 50
  },
  title: {
    textAlign: 'center',
    fontSize:20,
    marginBottom: 12,
  },
  subTitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    opacity: .8,
  },
  button: {
    marginTop: 25,
    backgroundColor: '#ddd',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  }
})