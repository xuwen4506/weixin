const db = wx.cloud.database()
Page({
  data: {
    list1: [],
    value1: "",
    value2: "",
    value3: "",
    orderNumber:"",
    state: "",
    time:""

   
  },
  // 姓名
  onChange1(event) {
     console.log(event.detail)
    this.setData({
      value1: event.detail
    })
  },
  // 手机号
  onChange2(event) {
    // console.log(event.detail)
    this.setData({
      value2: event.detail
    })
  },
  // 留言
  onChange3(event) {
    // console.log(event.detail)
    this.setData({
      value3: event.detail
    })
  },
  submit(e) {
    // console.log(this.data.value1)
    //  console.log(this.data.value2)
    //  console.log(this.data.value3)
    // 获取当前日期
    var myDate = new Date();//当前时间
    // console.log(myDate.toLocaleString())
    var time = myDate.toLocaleString()
    // console.log(myDate)
    var year = myDate.getFullYear();//当前年份
    // console.log(year)
    var month = myDate.getMonth() + 1;//当前月份
    // console.log(month)
    var day = myDate.getDate();//当前日
    // console.log(day)
// 获取1到10的随机数
    var num = Math.floor(Math.random() * 10) + 1;
    // console.log(num);
    // 拼接订单号
    var orderNumber = year+"0"+month+"0"+day+17+num;
    console.log(orderNumber)
    // 获得下单时间
    this.setData({
      orderNumber:orderNumber,
      time: time
    })
    db.collection("count").add({
        data: {
          order_img: this.data.list1[0].order_img,
          order_top: this.data.list1[0].order_top,
          order_sub: this.data.list1[0].order_sub,
          order_price: this.data.list1[0].order_price,
          username: this.data.value1,
          utel: this.data.value2,
          chat: this.data.value3,
          orderNumber: this.data.orderNumber,
          time:this.data.time,
          state:"进行中"
        }
      }).then(res => {
        this.setData({
          state:this.data.state
        })
      })
      .catch(err => {
        console.log(err)
      })
      // 跳转到订单详情页并传入id
    var id = e.currentTarget.dataset.orderid
    console.log(id)
    wx.navigateTo({
      url: '/pages/OrderDetails/OrderDetails?id=' + id,
    })
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // // 接收上个页面传来的id值
    var id = options.id;
    db.collection("Order")
      .where({
        id: id
      })
      .get()
      .then(res => {
        console.log(res)
        this.setData({
          list1: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })

  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.setNavigationBarTitle({
      title: '订单结算',
    })
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