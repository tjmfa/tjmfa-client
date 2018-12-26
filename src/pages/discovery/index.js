import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtGrid, AtDivider } from 'taro-ui'
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

  handleClick() {
    Taro.navigateTo({
      url: '/pages/book/index'
    })
  }

  render () {
    return (
      <View className='index'>
        <AtGrid data={
          [
            {
              image: 'https://jdc.jd.com/img/200',
              value: '波德莱尔'
            },
            {
              image: 'https://jdc.jd.com/img/200',
              value: '尼采'
            },
            {
              image: 'https://jdc.jd.com/img/200',
              value: '弗莱'
            },
            {
              image: 'https://jdc.jd.com/img/200',
              value: '弗洛依德'
            },
            {
              image: 'https://jdc.jd.com/img/200',
              value: '克莱夫·贝尔'
            },
            {
              image: 'https://jdc.jd.com/img/200',
              value: '海德格尔'
            },
            {
              image: 'https://jdc.jd.com/img/200',
              value: '本雅明'
            },
            {
              image: 'https://jdc.jd.com/img/200',
              value: '格林伯格'
            },
            {
              image: 'https://jdc.jd.com/img/200',
              value: '霍克海默'
            },
            {
              image: 'https://jdc.jd.com/img/200',
              value: '丹尼尔·贝尔'
            },
            {
              image: 'https://jdc.jd.com/img/200',
              value: '丹托'
            },
            {
              image: 'https://jdc.jd.com/img/200',
              value: '蔡国强'
            },
          ]
        } onClick={this.handleClick.bind(this)}/>
        {/* <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Discovery</Text></View> */}
        <AtDivider content='艺术是有底线的' fontColor='#E5E5E5' lineColor='#f0f0f0' />
      </View>
    )
  }
}

export default Discovery
