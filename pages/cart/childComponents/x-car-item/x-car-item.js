// pages/cart/childComponents/x-car-item/x-car-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods: {
      type: Object,
      value: {}
    },
    index: {
      type: Number
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
    onCheckClick() {
      this.triggerEvent('onCheckClick', {
        iid: this.data.goods.iid
      })
    },
    countSub() {
      this.triggerEvent('countSub', {
        iid: this.data.goods.iid
      })
    },
    countAdd() {
      this.triggerEvent('countAdd', {
        iid: this.data.goods.iid
      })
    },
  }
})