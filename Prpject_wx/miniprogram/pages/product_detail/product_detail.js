const db=wx.cloud.database()
Page({
  data: {
list:[]
  },
  onLoad: function (options) {
// // 接收上个页面传来的id值
    var id=options.id;
    console.log(id);
    db.collection("Order")
    .where({
      id:id
    })
    .get()
    .then(res=>{
      console.log(res)
      this.setData({
        list:res.data
      })
    })
    .catch(err=>{
      console.log(err)
    })

  },
// 点击预约跳转
  count: function (e) {
    // 获取页面传入id的方法
    // 1.先写e：当前事件对象 target：触发事件元素
    // 即button，dataset所有自定义属性
    // 2.再写你的自定义属性
    // 获取小程序自定义属性
    var id = e.currentTarget.dataset.countid
    console.log(id)
    wx.navigateTo({
      url: '/pages/OrderCount/OrderCount?id=' + id,
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '详情页',
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