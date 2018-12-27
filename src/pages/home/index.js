import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtTabs, AtTabsPane, Swiper, SwiperItem, AtNoticebar } from 'taro-ui'
import TJArticleList from '../../components/articleList/index'
import { add, minus, asyncAdd } from '../../actions/counter'
import './index.scss'

import artcles from '../../mock/artcles.json'

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
    navigationBarTitleText: 'TJMFA',
    pages: [
      'pages/out/index'
    ],
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
      { id: 'swiper1', src: 'https://7465-tes-5bf8f1-1253291516.tcb.qcloud.la/轮播/梵高-星夜.jpg?sign=622ac0de9229e2a31006605bb57a5c4e&t=1545925402' },
      { id: 'swiper2', src: 'https://7465-tes-5bf8f1-1253291516.tcb.qcloud.la/轮播/梵高-星夜.jpg?sign=622ac0de9229e2a31006605bb57a5c4e&t=1545925402' },
      { id: 'swiper3', src: 'https://7465-tes-5bf8f1-1253291516.tcb.qcloud.la/轮播/梵高-星夜.jpg?sign=622ac0de9229e2a31006605bb57a5c4e&t=1545925402' },
    ];
    const noticeList = [
      { id: 'ntl1', text: '同学们，MFA 马上进入期末考试啦，加油复习噢！' },
      { id: 'ntl2', text: '12 月 23 日 参加上海双年展！' },
      { id: 'ntl3', text: '12 月 31 日 游览文物商店！' },
    ]
    return (
      <View className='tj-home'>
        <AtNoticebar className='tj-home-notice' marquee icon='volume-plus' speed={50}>
          { noticeList.map(item => item.text).reduce((p, v) => p + v) }
        </AtNoticebar>
        <Swiper className='tj-home-swiper' indicatorColor='#999' indicatorActiveColor='#333' circular indicatorDots autoplay>
          {
            swiperList.map(item => 
              <SwiperItem key={item.id}>
                <Image className='tj-home-swiper-image' mode="aspectFill" src={item.src}></Image>
              </SwiperItem>)
          }
        </Swiper>
        <AtTabs current={this.state.current} tabList={artcles.map(item => { return { title: item.name } })} onClick={this.handleTabsClick.bind(this)}>
          {
            artcles.map((item, index) => 
              <AtTabsPane index={index} key={item.id}>
                <TJArticleList data={item.list}/>
              </AtTabsPane>
            )
          }
        </AtTabs>
      </View>
    )
  }
}

export default Home
