import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtTabs, AtTabsPane, Swiper, SwiperItem, AtNoticebar } from 'taro-ui'
import TJArticleList from '../../components/articleList/index'
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
class Home extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
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

  /**
   * 事件-选项卡切换
   * @param {Number} value 当前选项卡索引
   */
  handleTabsClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    const swiperList = [
      { id: 'swiper1', src: 'https://picsum.photos/600/400?image=10' },
      { id: 'swiper2', src: 'https://picsum.photos/600/400?image=11' },
      { id: 'swiper3', src: 'https://picsum.photos/600/400?image=12' },
    ];
    const tabList = [
      { title: '艺术哲学' },
      { title: '艺术产业' },
      { title: '博物馆学' },
    ];
    const articleList = [
      { id: 'art1', title: '现代生活的画家', author: '田坤，陈洁', summary: '弗莱在讨论这本书的时候究竟在说什么', src: 'https://picsum.photos/600/400?image=10' },
      { id: 'art2', title: '印象主义哲学', author: '田坤，陈洁', summary: '弗莱在讨论这本书的时候究竟在说什么', src: 'https://picsum.photos/600/400?image=10' },
      { id: 'art3', title: '印象主义哲学', author: '田坤，陈洁', summary: '弗莱在讨论这本书的时候究竟在说什么', src: 'https://picsum.photos/600/400?image=10' },
    ]
    const noticeList = [
      { id: 'ntl1', text: '同学们，MFA 马上进入期末考试啦，加油复习噢！' },
      { id: 'ntl2', text: '12 月 26 日 孙老师带队去文物商店啦！' },
      { id: 'ntl3', text: '12 月 26 日 陆老师带我们去上海双年展啦！' },
    ]
    return (
      <View className='tj-home'>
        <Swiper className='tj-home-swiper' indicatorColor='#999' indicatorActiveColor='#333' circular indicatorDots autoplay>
          {
            swiperList.map(item => 
              <SwiperItem key={item.id}>
                <View className='tj-home-swiper-item'>
                  <Image className='tj-home-swiper-image' src={item.src}></Image>
                </View>
              </SwiperItem>)
          }
        </Swiper>
        <AtNoticebar className='tj-home-notice' marquee icon='volume-plus' speed={50}>
          { noticeList.map(item => item.text).reduce((p, v) => p + v) }
        </AtNoticebar>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleTabsClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0}>
            <TJArticleList data={articleList}/>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Home
