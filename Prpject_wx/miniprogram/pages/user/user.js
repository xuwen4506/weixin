const db=wx.cloud.database()
// 获取总数

Page({
  data: {
  list:[],
  list1:[],
    hiddenName:true,
    lookmore:["查看更多"],
    goCount: "",//进行中个数
    delcount:""//已取消个数
  },
  loadMore() {
    db.collection("user")
    .where({
      tid:"1"
    })
    .get()
    .then(res => {
        console.log(res.data)
        this.setData({
          list:res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  loadMore1() {
    db.collection("user")
      .where({
        tid: "2"
      })
      .get()
      .then(res => {
        console.log(res.data)
        this.setData({
          list1: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function (options) {
    this.loadMore()
    this.loadMore1()
    this.getcount()
    this.getdelcount()
  },
  // 获取数据库进行中集合的条数
  getcount(){
    db.collection('count').where({
      // _openid: 'xxx' // 填入当前用户 openid
      state:"进行中"
    }).count({
      // this内外一致不能用function改用箭头函数
      success:res=> {
         console.log(res.total)
        var a = res.total
        this.setData({
          goCount:a
        }) 
      }
    })
  },

  // 获取数据库已取消集合的条数
  getdelcount() {
    db.collection('count').where({
      // _openid: 'xxx' // 填入当前用户 openid
      state: "已取消"
    }).count({
      // this内外一致不能用function改用箭头函数
      success: res => {
        console.log(res.total)
        var b = res.total
        this.setData({
          delcount: b
        })
      }
    })
  },



  delall(){
    wx.navigateTo({
      url: '/pages/delDetails/delDetails',
    })

  },
  // 跳转进行中页面
  goOn(){
    wx.navigateTo({
      url: '/pages/goon/goon',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // 点击隐藏下方
click(){
  if (this.data.lookmore=="查看更多"){
    this.setData({
      hiddenName: !this.data.hiddenName,
      lookmore: "收起",
    })
  } else {
    this.setData({
      hiddenName: !this.data.hiddenName,
      lookmore: "查看更多"
    })
    
  }

},
  all(){
    wx.navigateTo({
      url: '/pages/OrderDetails/OrderDetails',
    })
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '我的',
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