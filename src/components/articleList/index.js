import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

class TJArticleList extends Taro.Component {
  constructor () {
    super(...arguments)
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='tj-aticleList'>
        {
          this.props.data.map(item => 
            <View className='tj-aticleList-item'>
              <Image className='tj-aticleList-img' src={item.src}></Image>
              <Text className='tj-aticleList-title'>{item.title}</Text>
              <Text className='tj-aticleList-author'>{item.author}</Text>
              <Text className='tj-aticleList-summary'>{item.summary}</Text>
            </View>)
        }
      </View>
    )
  }
}

export default TJArticleList
