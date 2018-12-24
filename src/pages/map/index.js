import Taro from '@tarojs/taro'
import { Map } from '@tarojs/components'
import './index.scss'

class TJMap extends Taro.Component {
  constructor () {
    super(...arguments)
  }
  config = {
    navigationBarTitleText: 'TJMFA'
  }
  componentWillMount () {
    
  }
  render () {
    return (
      <Map onClick={this.onTap} />
    )
  }
}

export default TJMap
