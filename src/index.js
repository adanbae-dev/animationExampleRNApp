import SampleMain from './SampleViews/SampleMain'
import SampleAPIs from './SampleViews/SampleAPIs'
import SampleIOS from './SampleViews/SampleIOS'
import Sample1 from './SampleViews/Sample1'
import Sample2 from './SampleViews/Sample2'
import Sample3 from './SampleViews/Sample3'
import Sample4 from './SampleViews/Sample4'
import Sample5 from './SampleViews/Sample5'
import Sample6 from './SampleViews/Sample6'
import Sample7 from './SampleViews/Sample7'
import Sample8 from './SampleViews/Sample8'
import Sample9 from './SampleViews/Sample9'
import Sample10 from './SampleViews/Sample10'
import Sample11 from './SampleViews/Sample11'
import Sample12 from './SampleViews/Sample12'
import Sample13 from './SampleViews/Sample13'
import Sample14 from './SampleViews/Sample14'
import Sample15 from './SampleViews/Sample15'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigation, createBottomTabNavigator } from 'react-navigation-tabs'

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
const Samples2Nav = createStackNavigator ({
  SampleAPIs : {screen : SampleAPIs},
  Sample7 : {screen : Sample7},
  Sample8 : {screen : Sample8},
  Sample9 : {screen : Sample9},
  Sample10 : {screen : Sample10},
  Sample11 : {screen : Sample11},
  Sample12 : {screen : Sample12},
  Sample13 : {screen : Sample13},
  Sample14 : {screen : Sample14},
  Sample15 : {screen : Sample15},
},
{
navigationOptions:{
  headerStyle:{
      backgroundColor : colors.primary
  },
  headerTintColor: '#fff'
}
})

const Samples3Nav = createStackNavigator ({
  SampleIOS : {screen : SampleIOS},
},
{
navigationOptions:{
  headerStyle:{
      backgroundColor : colors.primary
  },
  headerTintColor: '#fff'
}
})

const AppTabs = createBottomTabNavigator({
  Animated: {screen: SamplesNav},
  APIs: {screen: Samples2Nav},
  IOS : {screen: SampleIOS}
})

// const DrawNavi = create

const nav = createAppContainer(AppTabs)

export default nav