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
      { id: 'swiper1', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg' },
      { id: 'swiper2', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/The_Nightwatch_by_Rembrandt_-_Rijksmuseum.jpg/1280px-The_Nightwatch_by_Rembrandt_-_Rijksmuseum.jpg' },
      { id: 'swiper3', src: 'https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LSAEhBN4F52pTchVfLa%2F-LTNspr8SsjBNKC7oXw-%2F-LTNsq_IVT36E8_p2jVY%2FBenjamin.jpg?generation=1544458300802530&alt=media' },
    ];
    const tabList = [
      { title: '艺术哲学' },
      { title: '艺术产业' },
      { title: '博物馆学' },
    ];
    const mock_Art_Philosophy = [
      { id: 'art_0', title: '印象主义哲学 | 弗莱', author: '田坤，陈洁', summary: '美学，古典，绘画', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg', link: 'https://mp.weixin.qq.com/s/iq8n5tbgx48HZu4KOSB4Ug' },
      { id: 'art_1', title: '技术可复制时代的艺术 | 本雅明', author: '李想，邓登举', summary: '美学，古典，绘画', src: 'https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LSAEhBN4F52pTchVfLa%2F-LTNspr8SsjBNKC7oXw-%2F-LTNsq_IVT36E8_p2jVY%2FBenjamin.jpg?generation=1544458300802530&alt=media', link: 'https://mp.weixin.qq.com/s/iq8n5tbgx48HZu4KOSB4Ug' },
    ]

    const mock_Art_Industry = [
      { id: 'art_0', title: '戳穿每一个图像后面的诡计', author: '陆兴华', summary: '美学，古典，绘画', src: '', link: 'https://mp.weixin.qq.com/s/dlObGfSEoqUN69WhKsrAyw' },
      { id: 'art_1', title: '丛林如何思考', author: '邓登举', summary: '魔幻，生物，亚马逊', src: 'https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LSAEhBN4F52pTchVfLa%2F-LTNspr8SsjBNKC7oXw-%2F-LTNsq_IVT36E8_p2jVY%2FBenjamin.jpg?generation=1544458300802530&alt=media', link: 'https://mp.weixin.qq.com/s/iq8n5tbgx48HZu4KOSB4Ug' },
    ]

    const mock_Museology = [
      { id: 'art_0', title: '春水秋山玉 何谓春水? 何谓秋山？', author: '陈洁', summary: '春水，秋山，契丹', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg', link: 'https://mp.weixin.qq.com/s?__biz=MzI4MjEyNjIwOQ==&mid=2247483735&idx=1&sn=37ab27c62608848c708918eb220591d2&chksm=eb9ff3b9dce87aaf1e7d6968d6440e6897a0c3603236d5baf8ed1d6f02db05f82e7812f4013e&token=2139284402&lang=zh_CN#rd' },
      { id: 'art_1', title: '红山文化玉器 玉猪龙 是猪 还是龙？', author: '陈洁', summary: '玉器，红山，猪龙', src: 'https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LSAEhBN4F52pTchVfLa%2F-LTNspr8SsjBNKC7oXw-%2F-LTNsq_IVT36E8_p2jVY%2FBenjamin.jpg?generation=1544458300802530&alt=media', link: 'https://mp.weixin.qq.com/s?__biz=MzI4MjEyNjIwOQ==&mid=2247483735&idx=2&sn=ae70b455649db0659772a3c8b550bf2b&chksm=eb9ff3b9dce87aaf22d0a078e056ad4c24c667a31d81287ca3554057e346cca90ec3b1d3cab6&token=2139284402&lang=zh_CN#rd' },
      { id: 'art_2', title: '汉玉 辟邪三宝 集齐召唤神龙~', author: '陈洁', summary: '玉刚卯，玉翁仲，玉司南', src: 'https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LSAEhBN4F52pTchVfLa%2F-LTNspr8SsjBNKC7oXw-%2F-LTNsq_IVT36E8_p2jVY%2FBenjamin.jpg?generation=1544458300802530&alt=media', link: 'https://mp.weixin.qq.com/s?__biz=MzI4MjEyNjIwOQ==&mid=2247483735&idx=3&sn=186c6067b2d770b549431c0f1f141407&chksm=eb9ff3b9dce87aaf8eef8e75ac74118680aaa2855e3567bb871f3799cd6a08ac9275f8933e1e&token=2139284402&lang=zh_CN#rd' },
    ]

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
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleTabsClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0}>
            <TJArticleList data={mock_Art_Philosophy}/>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <TJArticleList data={mock_Art_Industry}/>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <TJArticleList data={mock_Museology}/>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Home
