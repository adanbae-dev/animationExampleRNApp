import React, {Component } from 'react'
import { Text, View} from 'react-native'
import SegmenetedControlIOS from '@react-native-community/segmented-control'

const values = ['One', 'Two', 'Three']

class Sampel24 extends Component {
  constructor() {
    super()
    this.state = {
      selectedIndex : 0,
    }
  }

  render() {
    const { selectedIndex } = this.state

    let selectedItem = values[selectedIndex]

    return (
      <View style={{marginTop: 40, padding: 20}}>
        <SegmenetedControlIOS
          values ={values}
          selectedIndex = {this.state.selectedIndex}
          onChange={(event) => {
            this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex})
          }}
          />
          <Text>{selectedItem}</Text>
      </View>
    )
  }
}

export default Sampel24