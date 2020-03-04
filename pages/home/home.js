// pages/home/home.js
import {
  getMultiData,
  getProduct
} from '../../server/home.js';

const POP = "pop";
const SELL = "sell";
const NEW = "new";

Page({
  data: {
    banner: [],
    recommend: [],
    titles: ["流行", "新款", "精选"],
    goodsList: [],
    goods: {
      [POP]: {
        page: 1,
        list: []
      },
      [NEW]: {
        page: 1,
        list: []
      },
      [SELL]: {
        page: 1,
        list: []
      }
    },
    currentType: POP,
    topPosition: 1000,
    showTabControl: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this._getMultiData();
    this._getProductData(POP);
    this._getProductData(NEW);
    this._getProductData(SELL);
  },

  //切换类型
  tabclick(e) {
    let currentType = ''
    switch (e.detail.index) {
      case 0:
        currentType = POP
        break
      case 1:
        currentType = NEW
        break
      case 2:
        currentType = SELL
        break
    }
    this.setData({
      currentType
    })
    // this.selectComponent(".tab-control-temp").setCurrentIndex(e.detail.index)
    this.selectComponent(".tab-control").setCurrentIndex(e.detail.index)
  },

  //返回顶部
  backTop() {
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },

  //获取页面样式,banner,活动栏
  _getMultiData() {
    getMultiData().then((res) => {
      console.log(res)

      const banner = res.data.banner.list.map(item => {
        return item.image
      })

      this.setData({
        banner,
        recommend: res.data.recommend.list
      })
    })
  },

  //获取商品
  _getProductData(type) {
    const page = this.data.goods[type].page;
    getProduct({
      type,
      page: this.data.goods[type].page
    }).then((res) => {
      const list = res.data.list;
      let goods = this.data.goods;
      goods[type].list.push(...list);
      goods[type].page += 1;
      this.setData({
        goods
      })
    })
  },

  //页面上拉触底事件的处理函数
  onReachBottom: function() {
    this._getProductData(this.data.currentType);
    console.log(this.data.currentType, '触底了')
  },

  //scroll-view滚动
  // scrollPosition(e) {
  // wx.createSelectorQuery().select('.tab-control').boundingClientRect((rect) => {
  //   const show = rect.top > 0
  //   this.setData({
  //     showTabControl: !show
  //   })
  // }).exec()
  // }
})