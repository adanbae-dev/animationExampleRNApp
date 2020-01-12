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
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample22')} key={'22'}>
          <View>
            <Text >
              PickerIOS로 데이터 목록 처리하기
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample23')} key={'23'}>
          <View>
            <Text >
              ProgressViewIOS 로 로딩 인디케이터 표시하기
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample24')} key={'24'}>
          <View>
            <Text >
              SegmentedControlIOS 로 수평 탭 바 만들기
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress ={()=> this.navigate('Sample25')} key={'25'}>
          <View>
            <Text >
              ActionSheetIOS 로 액션 시트나 공유 시트 만들기
            </Text>
          </View>
        </TouchableWithoutFeedback>
        
      </View>
    )
  }
}