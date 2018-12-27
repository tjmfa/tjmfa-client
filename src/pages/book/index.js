import Taro from '@tarojs/taro'
import { Swiper, SwiperItem, View, Text } from '@tarojs/components'
import { AtToast } from 'taro-ui'
import mock_book from '../../mock/book.json'
import './index.scss'

class Book extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      url: 'https://mp.weixin.qq.com/',
      isOpened: false,
    }
  }
  config = {
    navigationBarTitleText: '阅读'
  }
  componentWillMount () {
    this.setState({ url: this.$router.params.url });
  }

  handleDownload(url) {
    this.setState({ isOpened: true });
    wx.downloadFile({
      // 示例 url，并非真实存在
      url,
      success(res) {
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath,
          success(res) {
            console.log('打开文档成功');
            this.setState({ isOpened: false });
          }
        })
      }
    })
  }

  render () {
    return (
      <View>
        <Swiper
          className='tj-book'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay>
          {
            mock_book.map(item => 
              <SwiperItem className='tj-book-warp'>
                <View className='tj-book-card' onClick={this.handleDownload.bind(this, item.link)}>
                  <Text className='tj-book-title'>{item.title}</Text>
                  <Text className='tj-book-author'>{item.author}</Text>
                  <Text className='tj-book-year'>{item.publishInfo.year}</Text>
                  <View className='tj-book-skelon' style={{ width: '80%', marginTop: '50px' }}></View>
                  <View className='tj-book-skelon' style={{ width: '60%' }}></View>
                  <View className='tj-book-skelon' style={{ width: '40%', marginBottom: '50px' }}></View>
                  <View className='tj-book-btn'>直接下载</View>
                </View>
              </SwiperItem>
            )
          }
        </Swiper>
        <AtToast
          isOpened={this.state.isOpened}
          text='加载中'
          status="loading"/>
      </View>
    )
  }
}

export default Book
