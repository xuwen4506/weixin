const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state: [],
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var id = options.id * 1
    console.log(typeof(id))
    db.collection("count")
      .where({
        id: id
      })
      .get()
      .then(res => {
        console.log(res.data)
        this.setData({
          list: res.data
        })
        var arr = this.data.list
        console.log(this.data.list)
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].state == "已取消") {
            wx.navigateTo({
              url: '/pages/OrderDel/OrderDel?id=' + id,
            })
          } else if (arr[i].state == "进行中"){
            wx.navigateTo({
              url: '/pages/OrderGoing/OrderGoing?id=' + id,
            })
          }
        }

      })
      .catch(err => {
        console.log(err)
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