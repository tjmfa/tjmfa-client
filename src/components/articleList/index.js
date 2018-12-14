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

  /**
   * 事件-点击文章
   * @param {String} value 文章链接地址
   */
  handleArticleClick (value) {
    Taro.navigateTo({
      url: `/pages/out/index?url=${value}`
    })
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='tj-articleList'>
        {
          this.props.data.map(item => 
            <View className='at-row tj-articleList-item at-row__justify--between' key={item.id} onClick={this.handleArticleClick.bind(this, item.link)}>
              <View className='at-col at-col-3'>
                <Image className='tj-articleList-img' mode="aspectFill" src={item.src}></Image>
              </View>
              <View className='at-col at-col-9'>
                <Text className='at-article__h3 tj-articleList-title'>{item.title}</Text>
                <Text className='at-article__info tj-articleList-author'>{item.author}</Text>
                <View className='tj-articleList-tags'>
                  {/* {
                    item.summary.split('，').map(ele => <AtTag type='primary' size='small' circle>{ ele }</AtTag>)
                  } */}
                  <AtTag type='primary' size='small' circle>{ item.summary.split('，')[0] }</AtTag>
                  <AtTag type='primary' size='small' circle>{ item.summary.split('，')[1] }</AtTag>
                  <AtTag type='primary' size='small' circle>{ item.summary.split('，')[2] }</AtTag>
                </View>
              </View>
            </View>)
        }
      </View>
    )
  }
}

export default TJArticleList
