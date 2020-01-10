import React, { Component } from 'react'
import {
    Easing,
    StyleSheet,
    View,
    Animated,
    Button,
    Text
} from 'react-native'

export default class Sample3 extends Component {
  static navigationOptions = (props) => {
    
    return {
      title: '계속 회전하는 로딩 애니매이션 만들기',
      headerTitlesStyle : {
        color: 'white',
        fontSize: 30,
        fontWeight: '400'
      }
    }
  }
  // 초기 상태로 loading 아이콘이 필요한 상황인지(true)
  state = {
    loading: true,
  }

  // 2000(2초) 후에 loading state 를 변경하도록 setTimeout 함수를 호출, 로딩을 false 로 설정
  componentDidMount() {
        this.animate();
        setTimeout(() => this.setState({ loading: false }), 2000)
      }
  // animatedRotation 변수의 상태를 0으로 지정
  animatedRotation = new Animated.Value(0);


  // animate 클래스 함수를 만들고 Animated.loop 함수를 호출할 때, Animated.timing 을 인수로 전달
  animate = () => {
    Animated.loop(
      Animated.timing(
        this.animatedRotation,
        {
          toValue: 1,
          duration: 1800,
          easing: Easing.linear
        }
      )
    ).start()
    
  }
  render() {
    // animationrotation에 애니메이션 효과를 연결해서 새로운 roation 변수 생성
    const rotation = this.animatedRotation.interpolate({
      inputRange: [0, 1], // 애니메이션 시작과 끝
      outputRange: ['0deg', '360deg'] // 애니메이션의 진행 변화
    })

    const { loading } = this.state
    return (
      <View style={styles.container}>
        {
          loading ? (
            <Animated.Image
              source={require('../assets/35633-200.png')}
              style={{width: 40, height: 40, transform: [{rotate: rotation}] }}
              />
          ) : (
            <Text>Welcome</Text>
          )
        }
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
  }
})