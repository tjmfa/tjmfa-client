/**
 * 封装-请求云函数
 * @param {String} name 
 * @param {Object} data 
 */
export default async function request(name, data) {
  wx.cloud.init({
    env: 'tes-5bf8f1',
    traceUser: true
  })
  return new Promise((resolve, reject) => {
    wx.cloud.callFunction({
      name,
      data
    }).then((res) => {
      resolve(res);
    }).catch((e) => {
      reject(e);
    });
  })
}