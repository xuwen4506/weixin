const db=wx.cloud.database()
Page({
  data: {
    list:[]
  
  },

  onLoad: function (options) {
    // console.log(options.id)
    var id = options.id
    console.log(id)
    db.collection("count")
      .where({
        state: "进行中",
        _id: id
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
// 跳转地图
  look(){
    wx.navigateTo({
      url: "/pages/LookMap/LookMap"
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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