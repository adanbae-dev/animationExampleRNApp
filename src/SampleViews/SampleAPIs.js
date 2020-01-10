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
          Sample APIs
        </Text>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample7')} key={'1'}>
          <View>
            <Text >
              Alert API를 이용해서 크로스 플랫폼용 알림 만들기
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample8')} key={'2'}>
          <View>
            <Text >
              AppState API를 이용해서 현재 앱 상태 확인하기
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample9')} key={'3'}>
          <View>
            <Text >
              AsyncStorage API를 이용해서 데이터 유지하기
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample10')} key={'4'}>
          <View>
            <Text >
              Clipboard API를 이용해서 텍스트를 사용자 클립보드에 복사하기
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample11')} key={'5'}>
          <View>
            <Text >
              Dimensions API 를 이용해서 디바이스의 화면 정보 확인하기
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample12')} key={'6'}>
          <View>
            <Text >
              Geolocation API를 이용해서 사용자의 현재 위치 확인하기
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample13')} key={'6'}>
          <View>
            <Text >
              Keyboard API를 이용해서 네이티브 키보드의 위치와 기능 조정하기
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample14')} key={'6'}>
          <View>
            <Text >
              NetInfo API 를 이용해서 사용자의 온라인 연결 상태 확인하기
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}