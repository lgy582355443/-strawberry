// pages/home/childComponents/x-tap-control/x-tap-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(e) {
      this.setData({
        currentIndex: e.currentTarget.dataset.index
      })
      this.triggerEvent('tabclick', {
        index: this.data.currentIndex
      })
    },
    setCurrentIndex(index) {
      this.setData({
        currentIndex: index
      })
    }
  }
})