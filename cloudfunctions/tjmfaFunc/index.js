// 云函数入口文件
const cloud = require('wx-server-sdk')
const fs = require('fs')
const path = require('path')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  return {
    event: event.a + event.b,
    book: cloud.database().collection('book').get(),
    openid: cloud.getWXContext().OPENID,
    appid: cloud.getWXContext().APPID,
    unionid: cloud.getWXContext().UNIONID,
  }
}

// 数据库操作
const DB = async (event, context) => {
  return db.collection('book').get()
}

// 文件下载操作
const DownloadFile = async (event, context) => {
  const fileID = 'cloud://tes-5bf8f1.7465-tes-5bf8f1/艺术哲学/01-波德莱尔-现代生活的画家（选）.pdf'
  const res = await cloud.downloadFile({
    fileID,
  })
  const buffer = res.fileContent
  return buffer.toString('utf8')
}

// 文件流上传操作
const UploadFile = async (event, context) => {
  const fileStream = fs.createReadStream(path.join(__dirname, 'demo.jpg'))
  return await cloud.uploadFile({
    cloudPath: 'demo.jpg',
    fileContent: fileStream,
  })
}

// 云函之间调用
const MicroService = async (event, context) => {
  return await cloud.callFunction({
    name: 'sum',
    data: {
      x: 1,
      y: 2,
    }
  })
}
