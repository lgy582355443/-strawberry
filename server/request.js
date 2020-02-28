import {
  baseURL,
  timeout
} from './config.js'

function request(options) {
  wx.showLoading({
    title: '加载中',
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      timeout: timeout,
      method: options.method || 'get',
      data: options.data,
      success: (res) => {
        resolve(res.data)
      },
      fail: reject,
      complete: (res) => {
        wx.hideLoading()
      }
    })
  })
}

export default request;