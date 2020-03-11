// pages/cart/cart.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carList: [],
    isSelectAll: true,
    totalPrice: 0,
    totalCounter: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    const carList = app.globalData.carList;
    console.log(carList);
    this.setData({
      carList
    })
    console.log(carList);
    if (this.data.carList.length > 0) {
      this._getTotalPrice()
      this._getTotalCounter()
      this._isSelectAll()
    }
  },
  countSub(e) {
    const currentIid = e.detail.iid;
    const currentGoods = this.data.carList.find(item => item.iid == currentIid);
    if (currentGoods.count == 1) {
      wx.showToast({
        title: '最少购买1件商品',
        icon: 'none',
      })
      return
    }
    let carList = this.data.carList.map(item => {
      if (item.iid == currentIid) {
        item.count--;
      }
      return item
    })
    this.setData({
      carList
    })
    this._getTotalPrice()
    this._getTotalCounter()
    app.globalData.carList = this.data.carList;
  },

  countAdd(e) {
    const currentIid = e.detail.iid;
    let carList = this.data.carList.map(item => {
      if (item.iid == currentIid) {
        item.count++;
      }
      return item
    })
    this.setData({
      carList
    })
    this._getTotalPrice()
    this._getTotalCounter()
    app.globalData.carList = this.data.carList;
  },

  onCheckClick(e) {
    const currentIid = e.detail.iid;
    let carList = this.data.carList.map(item => {
      if (item.iid == currentIid) {
        item.checked = !item.checked
      }
      return item
    })
    this.setData({
      carList
    })
    this._getTotalPrice()
    this._getTotalCounter()
    this._isSelectAll()

  },

  //计算总价格
  _getTotalPrice() {
    const totalPrice = this.data.carList.reduce((total, item) => {
      if (item.checked) {
        return total + item.price * item.count;
      }
      return total
    }, 0)
    this.setData({
      totalPrice
    })
  },

  //计算选中商品数量
  _getTotalCounter() {
    const totalCounter = this.data.carList.reduce((total, item) => {
      if (item.checked) {
        return total + item.count;
      }
      return total
    }, 0)
    this.setData({
      totalCounter
    })
  },

  //全选
  onSelectAll() {
    const isSelectAll = this.data.carList.every(item => item.checked);
    let carList = this.data.carList.map(item => {
      item.checked = !isSelectAll;
      return item
    })
    this.setData({
      carList,
      isSelectAll: !isSelectAll
    })
    this._getTotalPrice()
    this._getTotalCounter()
    app.globalData.carList = this.data.carList;
  },

  //判断是否全选
  _isSelectAll() {
    const isSelectAll = this.data.carList.every(item => item.checked);
    this.setData({
      isSelectAll
    })
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})