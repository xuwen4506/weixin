// pages/LookMap/LookMap.js
const db=wx.cloud.database()
Page({

  // /**
  //  * 页面的初始数据
  //  */
  data: {
    latitude: 28.1420301282,
    longitude: 113.0438958869,
    markers: [{
      id: 1,
      latitude: 28.1420301282,
      longitude: 113.0438958869,
      // name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 28.1420301282,
      longitude: 113.0438958869,
      iconPath: '../../images/location.png'
    }, {
        latitude: 28.1420301282,
        longitude: 113.0438958869,
      iconPath: '../../images/location.png'
    }]
  },
 
  // /**
  //  * 生命周期函数--监听页面加载
  //  */
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
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