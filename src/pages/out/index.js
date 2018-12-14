import Taro from '@tarojs/taro'
import { WebView, Text } from '@tarojs/components'
import './index.scss'

class Out extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      url: 'https://mp.weixin.qq.com/',
    }
  }
  config = {
    navigationBarTitleText: 'TJMFA'
  }
  componentWillMount () {
    this.setState({ url: this.$router.params.url });
  }
  render () {
    return (
      <WebView src={this.state.url}/>
    )
  }
}

export default Out
