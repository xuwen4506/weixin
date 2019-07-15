const db=wx.cloud.database();
Page({
  data: {
     
   
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 300,
    list1:[],
    list2:[],
    list3:[],
    list4: [],
    list5: []
  },
  loadMore(tid){
    db.collection("Hot_product")
    .where({
      tid:"2"
    }) 
   .get()
   .then(res=>{
     this.setData({
       list2:res.data
     })
   })
   .catch(err=>{
     console.log(err)
   })
 },
// 第二个
  loadMore1(tid) {
    db.collection("Hot_product")
      .where({
        tid: "1"
      })
      .get()
      .then(res => {
        this.setData({
          list1: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
// 第三个
  loadMore3(tid) {
    db.collection("Hot_product")
      .where({
        tid: "3"
      })
      .get()
      .then(res => {
        this.setData({
          list3: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  // 第四个
  loadMore4(tid) {
    db.collection("Hot_product")
      .where({
        tid: "4"
      })
      .get()
      .then(res => {
        this.setData({
          list4: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  // 第五个
  loadMore5(tid) {
    db.collection("Hot_product")
      .where({
        tid: "5"
      })
      .get()
      .then(res => {
        this.setData({
          list5: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.loadMore1(1)
    this.loadMore(2)
    this.loadMore3(3)
     this.loadMore4(4)
    this.loadMore5(5)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //  console.log(tid)
    //  console.log(res.data)
    //  if (tid==1){
    //    this.setData({
    //      list1: res.data
    //    })
    //  } else if (tid == 2){
    //    this.setData({
    //      list2: res.data
    //    })
    //  } else if (tid == 3){
    //    this.setData({
    //      list3: res.data
    //    })
    //  }else{
    //    this.setData({
    //      list4: res.data
    //    })
    //  }

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