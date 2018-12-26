import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtAvatar, AtList, AtListItem, AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'
import avatar from '../../asset/images/avatar.jpg'
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
class About extends Taro.Component {
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
    wx.downloadFile({
      // 示例 url，并非真实存在
      url: 'https://7465-tes-5bf8f1-1253291516.tcb.qcloud.la/艺术哲学/01-波德莱尔-现代生活的画家（选）.pdf?sign=6cc6222a097be99ff435b91d31219911&t=1545828444',
      success(res) {
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath,
          success(res) {
            console.log('打开文档成功')
          }
        })
      }
    })
  }

  render () {
    return (
      <View className='tj-about'>
        <AtAvatar className='tj-about-avatar' circle size="large" image={avatar}></AtAvatar>
        <AtList>
          <AtListItem
            title='意见反馈'
            extraText='￣▽￣'
            iconInfo={{ size: 25, color: '#78A4FA', value: 'mail', }}
            onClick={this.handleClick.bind(this)}
          />
          <AtListItem
            title='开发者'
            extraText='2018 MFA'
            iconInfo={{ size: 25, color: '#78A4FA', value: 'user', }}
          />
          <AtListItem
            title='公众号'
            extraText='TJMFA'
            iconInfo={{ size: 25, color: '#78A4FA', value: 'share', }}
          />
          <AtListItem
            title='捐赠'
            extraText='喝杯咖啡'
            iconInfo={{ size: 25, color: '#78A4FA', value: 'sketch', }}
          />
          <AtListItem
            title='版本'
            extraText='v1.0.3'
            iconInfo={{ size: 25, color: '#78A4FA', value: 'file-code', }}
          />
        </AtList>
        {/* <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>About</Text></View> */}
        {/* <AtButton type='secondary' size='normal' openType="contact">客户服务</AtButton> */}
      </View>
    )
  }
}

export default About
