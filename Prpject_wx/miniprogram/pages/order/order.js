const db=wx.cloud.database()
Page({
  data: {
    images4: [],
    id:[]
  },
  loadMore() {
    db.collection("Order")
      .get()
      .then(res => {
        // console.log(res.data)
        this.setData({
          images4: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
// 点击跳转详情页
  // 点击详情跳转
  jump: function (e) {
//  console.log(e)
    // 传递id到另个页面
    // 1.先写e：当前事件对象 target：触发事件元素
    // 即button，dataset所有自定义属性
    // 2.再写你的自定义属性
    // 获取小程序自定义属性
    var id = e.currentTarget.dataset.productid
    console.log(id)
    wx.navigateTo({
      url: '/pages/product_detail/product_detail?id=' + id,
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
this.loadMore()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '订座预约',
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})