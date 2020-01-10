import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native'

export default class Sample1 extends Component {
  navigate = (title) => {
    this.props.navigation.navigate(title, {city:null})
  }

  render() {
    return (
      <View>
        <Text>
          Sample Main
        </Text>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample1')} key={'1'}>
          <View>
            <Text >
              Animated Sample1
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample2')} key={'2'}>
          <View>
            <Text >
              Animated Sample2 - 입력창에 포커스 애니메이션
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample3')} key={'3'}>
          <View>
            <Text >
              Animated Sample3 - 사용자 정의 애니메이션
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample4')} key={'4'}>
          <View>
            <Text >
              Animated Sample4 - 병렬처리 애니메이션
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample5')} key={'5'}>
          <View>
            <Text >
              Animated Sample5 - 순차처리 애니메이션
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample6')} key={'6'}>
          <View>
            <Text >
              Animated Sample6 - 일정 간격주기 애니메이션
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}