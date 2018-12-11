import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtTabBar }  from 'taro-ui'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'
import './index.scss'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Home extends Taro.Component {
  constructor () {
    super(...arguments)
  }
  config = {
    navigationBarTitleText: 'TJMFA'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleNavigateTo (value) {
    console.log(value);
  }

  render () {
    return (
      <View className='index'>
        {/* <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View> */}
        <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType: 'sketch' },
            { title: '关于', iconType: 'user' }
          ]}
          onClick={this.handleNavigateTo.bind(this)}
          current={0}
        />
      </View>
    )
  }
}

export default Home
