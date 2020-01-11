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
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample21')} key={'21'}>
          <View>
            <Text >
              DatePicker를 이용 날짜와 시간 화면 표시 및 업데이트
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample22')} key={'12'}>
          <View>
            <Text >
              PickerIOS로 데이터 목록 처리하기
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample9')} key={'13'}>
          <View>
            <Text >
              AsyncStorage API를 이용해서 데이터 유지하기
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample10')} key={'14'}>
          <View>
            <Text >
              Clipboard API를 이용해서 텍스트를 사용자 클립보드에 복사하기
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample11')} key={'15'}>
          <View>
            <Text >
              Dimensions API 를 이용해서 디바이스의 화면 정보 확인하기
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample12')} key={'16'}>
          <View>
            <Text >
              Geolocation API를 이용해서 사용자의 현재 위치 확인하기
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample13')} key={'17'}>
          <View>
            <Text >
              Keyboard API를 이용해서 네이티브 키보드의 위치와 기능 조정하기
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample14')} key={'18'}>
          <View>
            <Text >
              NetInfo API 를 이용해서 사용자의 온라인 연결 상태 확인하기
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample15')} key={'19'}>
          <View>
            <Text >
              PanResponder API를 이용해서 touch와 gesture 이벤트의 정보 알아내기
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}