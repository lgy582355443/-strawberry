// components/x-goods-item/x-goods-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsItem: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(){
      console.log('dianjil')
      const iid = this.data.goodsItem.iid;
      wx.navigateTo({
        url: '/pages/detail/detail?iid='+iid
      })
    }
  }
})