//app.js
App({
  globalData: {
    carList: []
  },
  onLaunch: function() {},
  addToCart(goods) {
    const oldInfo = this.globalData.carList.find((item) => {
      item.iid === goods.iid
    })
    if (oldInfo) {
      oldInfo.count += 1
    } else {
      goods.count = 1
      goods.checked = true
      this.globalData.carList.push(goods)
    }
    console.log(this.globalData.carList)
  }
})