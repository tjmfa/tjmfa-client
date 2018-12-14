import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Home from './pages/home'

import configStore from './store'

import './app.scss'

const store = configStore()

class App extends Component {
  config = {
    pages: [
      'pages/home/index',
      'pages/discovery/index',
      'pages/about/index',
      'pages/out/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#333333",
      selectedColor: "#6190e8",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "./asset/images/bank.png",
        selectedIconPath: "./asset/images/bank_focus.png"
      }, {
        pagePath: "pages/discovery/index",
        text: "原著",
        iconPath: "./asset/images/read.png",
        selectedIconPath: "./asset/images/read_focus.png"
      }, {
        pagePath: "pages/about/index",
        text: "关于",
        iconPath: "./asset/images/user.png",
        selectedIconPath: "./asset/images/user_focus.png"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
