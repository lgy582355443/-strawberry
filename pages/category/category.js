// pages/category/category.js
import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from '../../server/category.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryData: {},
    categories: [],
    currentIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this._getCategory()
  },

  _getCategory() {
    getCategory().then(res => {
      console.log(res);
      const categories = res.data.category.list;
      // 2.初始化每个类别的子数据
      const categoryData = {}
      for (let i = 0; i < categories.length; i++) {
        categoryData[i] = {
          subcategories: [],
          categoryDetail: []
        }
      }
      this.setData({
        categories,
        categoryData
      })
      this._getSubcategory(0);
      this._getCategoryDetail(0);
    })
  },

  //获取子类分类
  _getSubcategory(index) {
    const maitkey = this.data.categories[index].maitKey;
    getSubcategory({
      maitKey: maitkey
    }).then(res => {
      console.log(res)
      const tempCategoryData = this.data.categoryData;
      tempCategoryData[index].subcategories = res.data.list;
      this.setData({
        categoryData: tempCategoryData
      })
    })
  },

  //获取分类里的商品
  _getCategoryDetail(index) {
    const miniWallkey = this.data.categories[index].miniWallkey;
    getCategoryDetail({
      miniWallkey,
      type: 'pop'
    }).then((res) => {
      console.log(res)
      const categoryData = this.data.categoryData;
      categoryData[index].categoryDetail = res;
      this.setData({
        categoryData: categoryData
      })
    })
  },

  menuClick(e) {
    const currentIndex = e.detail.currentIndex;
    this.setData({
      currentIndex
    })
    this._getSubcategory(currentIndex);
    this._getCategoryDetail(currentIndex);
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