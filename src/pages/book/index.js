import Taro from '@tarojs/taro'
import { Swiper, SwiperItem, View, Text } from '@tarojs/components'
import { AtToast } from 'taro-ui'
import mock_book from '../../mock/book.json'
import './index.scss'

class Book extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      isOpened: false,
      progress: '加载中',
      current: 0,
    }
  }
  config = {
    navigationBarTitleText: '阅读'
  }
  componentWillMount () {
    this.setState({ current: this.$router.params.bookid });
  }

  handleDownload(url) {
    const downloadTask = wx.downloadFile({
      url,
      success(res) {
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath,
          success(res) {
            console.log('文件打开成功：', res);
          }
        })
      }
    })
    downloadTask.onProgressUpdate(res => {
      if(res.progress == 100) {
        this.setState({ isOpened: false, progress: '加载中' });
      }else{
        this.setState({ isOpened: true, progress: `${res.progress}%` });
      }
    })
  }

  render () {
    const { current } = this.state;
    return (
      <View>
        <Swiper
          className='tj-book'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          indicatorDots
          current={current}>
          {
            mock_book.map(item => 
              <SwiperItem className='tj-book-warp' key={item.id}>
                <View className='tj-book-card' onClick={this.handleDownload.bind(this, item.link)}>
                  <Text className='tj-book-title'>{item.title}</Text>
                  <Text className='tj-book-author'>{item.author}</Text>
                  <Text className='tj-book-year'>{item.publishInfo.year}</Text>
                  <View className='tj-book-skelon' style={{ width: '80%', marginTop: '50px' }}></View>
                  <View className='tj-book-skelon' style={{ width: '60%' }}></View>
                  <View className='tj-book-skelon' style={{ width: '40%', marginBottom: '50px' }}></View>
                  <View className='tj-book-btn'>直接阅读</View>
                </View>
              </SwiperItem>
            )
          }
        </Swiper>
        <AtToast
          isOpened={this.state.isOpened}
          text={this.state.progress}
          hasMask
          status="loading"/>
      </View>
    )
  }
}

export default Book
