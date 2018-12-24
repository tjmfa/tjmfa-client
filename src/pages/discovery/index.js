import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtGrid } from 'taro-ui'
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
class Discovery extends Taro.Component {
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

  render () {
    return (
      <View className='index'>
        <AtGrid data={
          [
            {
              image: 'https://jdc.jd.com/img/200',
              value: '尼采'
            },
            {
              image: 'https://jdc.jd.com/img/200',
              value: '本雅明'
            },
            {
              image: 'https://jdc.jd.com/img/200',
              value: '弗莱'
            },
            {
              image: 'https://jdc.jd.com/img/200',
              value: '波德莱尔'
            },
            {
              image: 'https://jdc.jd.com/img/200',
              value: '弗洛依德'
            },
            {
              image: 'https://jdc.jd.com/img/200',
              value: '杰夫昆斯'
            }
          ]
        } />
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Discovery</Text></View>
      </View>
    )
  }
}

export default Discovery
