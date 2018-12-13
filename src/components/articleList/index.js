import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTag } from 'taro-ui'
import './index.scss'

if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
  require("taro-ui/dist/h5/css/index.css")
}

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
            <View className='at-row tj-aticleList-item' key={item.id}>
              <View className='at-col at-col-4'>
                <Image className='tj-aticleList-img' src={item.src}></Image>
              </View>
              <View className='at-col at-col-8'>
                <Text className='at-article__h3 tj-aticleList-title'>{item.title}</Text>
                  {/* {
                    item.summary.split('，').map(ele => <AtTag type='primary' size='small' circle>{ ele }</AtTag>)
                  } */}
                  <AtTag type='primary' size='small' circle>{ item.summary.split('，')[0] }</AtTag>
                  <AtTag type='primary' size='small' circle>{ item.summary.split('，')[1] }</AtTag>
                  <AtTag type='primary' size='small' circle>{ item.summary.split('，')[2] }</AtTag>
                <Text className='at-article__info tj-aticleList-author'>{item.author}</Text>
              </View>
            </View>)
        }
      </View>
    )
  }
}

export default TJArticleList
