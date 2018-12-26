import Taro from '@tarojs/taro'
import { Map, View } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import icon_location from '../../asset/images/location-fill.png'
import icon_gps from '../../asset/images/gps-fixed.png'
import './index.scss'

class TJMap extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  config = {
    navigationBarTitleText: 'TJMFA'
  }
  componentWillMount () {
    
  }
  onChange (value) {
    this.setState({
      value: value
    })
  }
  regionchange(e) {
    console.log(e.type)
  }
  markertap(e) {
    console.log(e.markerId)
  }
  controltap(e) {
    console.log(e.controlId)
  }
  render () {
    const data = {
      markers: [{
        iconPath: icon_location,
        id: 0,
        latitude: 31.282628,
        longitude: 121.501830,
        width: 20,
        height: 20
      }],
      polyline: [{
        points: [{
          longitude: 113.3245211,
          latitude: 23.10229
        }, {
          longitude: 113.324520,
          latitude: 23.21229
        }],
        color: '#FF0000DD',
        width: 2,
        dottedLine: true
      }],
      controls: [{
        id: 1,
        iconPath: icon_gps,
        position: {
          left: 0,
          top: 300 - 50,
          width: 20,
          height: 20
        },
        clickable: true
      }]
    }
    return (
      <View>
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        />
        <Map 
          id="map"
          longitude="121.501830"
          latitude="31.282628"
          scale="14"
          controls={data.controls}
          onControlTap={this.controltap.bind(this)}
          markers={data.markers}
          onMarkerTap={this.markertap.bind(this)}
          polyline={data.polyline}
          onRegionChange={this.regionchange.bind(this)}
          show-location
          style="width: 100%; height: 400px;"
        />
      </View>
    )
  }
}

export default TJMap
