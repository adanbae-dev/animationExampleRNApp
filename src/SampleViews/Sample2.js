import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Button,
    TextInput,
} from 'react-native'

export default class Sample2 extends Component {
  static navigationOptions = (props) => {
    
    return {
      title: '입력창에 포커스 애니메이션',
      headerTitlesStyle : {
        color: 'white',
        fontSize: 30,
        fontWeight: '400'
      }
    }
  }
  // animatedWidth 변수와 애니메이션 초깃값 만들기
  animatedWidth = new Animated.Value(200)

  // animatedWidth 속성에 애니메이션 효과를 함수로 만들기
  animated = (value) =>{
    Animated.timing(
      this.animatedWidth,
      {
        toValue: value,
        duration: 750,
      }
    ).start()
  }
  render() {
    return (
      <View style={styles.container}>
        {/* TextInput 컴포넌트를 감싼 컨테이너뷰의 스타일에 animatedWidth 값 연결 */}
        <Animated.View style={{width: this.animatedWidth}} >
          <TextInput
            style={[styles.input]}
            onBlur={()=> this.animated(200)}
            onFocus={()=>this.animated(325)}
            ref={input => this.input = input}
          />

          <Button
            title='submit'
            onPress={() => this.input.blur()}
          />
        </Animated.View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50
  },
  input: {
    height:50,
    marginHorizontal: 15,
    backgroundColor: '#ededed',
    marginTop: 10,
    paddingHorizontal: 9
  }
})