import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Button
} from 'react-native'

export default class Sample1 extends Component {
  static navigationOptions = (props) => {
    
    return {
      title: 'ggg',
      headerTitlesStyle : {
        color: 'white',
        fontSize: 30,
        fontWeight: '400'
      }
    }
  }
  // marginTop 이라는 클래스 속성을 만들고 애니메이션효과를 만들고, 시작값을 전달
  marginTop = new Animated.Value(20)

  animated = () =>{
    Animated.timing(
      this.marginTop,
      {
        toValue: 200,
        duration: 500,
      }
    ).start()
  }
  render() {
    return (
      <View style={styles.container}>
        <Button 
          title='Animated Box'
          onPress={this.animated}/>
        {/* View  컴포넌트 대신에 Animated.View 컴포넌트를 사용 */}
        <Animated.View
          style={[styles.box, {marginTop: this.marginTop}]} />
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
  box: {
    width: 150,
    height: 150,
    backgroundColor:'red'
  }
})