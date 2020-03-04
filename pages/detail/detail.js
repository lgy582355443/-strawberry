// pages/detail/detail.js
import {
  getDetail,
  getRecommends,
  GoodsBaseInfo,
  ShopInfo,
  ParamInfo
} from '../../server/detail.js';
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid: '',
    topImages: [],
    baseInfo: {},
    shopInfo: {},
    detailInfo: {},
    paramInfo: {},
    commentInfo: {},
    recommends: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      iid: options.iid
    })
    this._getDetailData();
    this._getRecommends();
  },

  onAddCart() {
    const goods = {};
    goods.iid = this.data.iid;
    goods.imageURL = this.data.topImages[0];
    goods.title = this.data.baseInfo.title;
    goods.desc = this.data.baseInfo.desc;
    goods.price = this.data.baseInfo.realPrice;

    // 2.加入到购物车列表
    app.addToCart(goods)
    // 3.加入成功提示
    wx.showToast({
      title: '加入购物车成功',
    })
  },

  _getDetailData() {
    getDetail({
      iid: this.data.iid
    }).then((res) => {
      const data = res.result;
      console.log(data)
      // 1.顶部的图片
      const topImages = data.itemInfo.topImages;

      // 2.BaseInfo对象
      const baseInfo = new GoodsBaseInfo(data.itemInfo, data.columns, data.shopInfo.services)

      // 3.ShopInfo对象
      const shopInfo = new ShopInfo(data.shopInfo);

      // 4.detailInfo信息
      const detailInfo = data.detailInfo;

      // 5.ParamInfo对象
      const paramInfo = new ParamInfo(data.itemParams.info, data.itemParams.rule)

      // 6.评论信息
      let commentInfo = {}
      if (data.rate && data.rate.cRate > 0) {
        commentInfo = data.rate.list[0]
      }

      this.setData({
        topImages,
        baseInfo,
        shopInfo,
        detailInfo,
        paramInfo,
        commentInfo
      })
    })
  },
  _getRecommends() {
    getRecommends().then(res => {
      this.setData({
        recommends: res.data.list
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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