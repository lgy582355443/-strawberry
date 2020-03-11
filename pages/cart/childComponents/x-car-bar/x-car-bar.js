// pages/cart/childComponents/x-car-bar/x-car-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectedAll: {
      type: Boolean,
      value: true
    },
    price: {
      type: Number
    },
    counter: {
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
    onSelectAll() {
      this.triggerEvent('onSelectAll')
    }
  }
})