import SampleMain from './SampleViews/SampleMain'
import Sample1 from './SampleViews/Sample1'
import Sample2 from './SampleViews/Sample2'
import Sample3 from './SampleViews/Sample3'
import Sample4 from './SampleViews/Sample4'
import Sample5 from './SampleViews/Sample5'
import Sample6 from './SampleViews/Sample6'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { colors } from './theme'
const SamplesNav = createStackNavigator ({
    SampleMain : {screen : SampleMain},
    Sample1 : {screen : Sample1},
    Sample2 : {screen : Sample2},
    Sample3 : {screen : Sample3},
    Sample4 : {screen : Sample4},
    Sample5 : {screen : Sample5},
    Sample6 : {screen : Sample6},
},
{
  navigationOptions:{
    headerStyle:{
        backgroundColor : colors.primary
    },
    headerTintColor: '#fff'
  }
})

// const DrawNavi = create

const nav = createAppContainer(SamplesNav)

export default nav