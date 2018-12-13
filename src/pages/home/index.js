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
      { id: 'swiper1', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg' },
      { id: 'swiper2', src: 'https://picsum.photos/750/400?image=11' },
      { id: 'swiper3', src: 'https://picsum.photos/750/400?image=12' },
    ];
    const tabList = [
      { title: 'Philosophy' },
      { title: 'Industry' },
      { title: 'Museology' },
    ];
    const articleList = [
      { id: 'art1', title: '现代生活的画家 | 波德莱尔', author: '碧纯，陈洁', summary: '美学，古典，绘画', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/The_Nightwatch_by_Rembrandt_-_Rijksmuseum.jpg/1280px-The_Nightwatch_by_Rembrandt_-_Rijksmuseum.jpg' },
      { id: 'art2', title: '印象主义哲学', author: '田坤，陈洁', summary: '美学，古典，绘画', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg' },
      { id: 'art3', title: '印象主义哲学', author: '田坤，陈洁', summary: '美学，古典，绘画', src: 'https://jdc.jd.com/img/200' },
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
                  <Image className='tj-home-swiper-image' mode="widthFix" src={item.src}></Image>
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
            <TJArticleList data={articleList}/>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <TJArticleList data={articleList}/>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Home
