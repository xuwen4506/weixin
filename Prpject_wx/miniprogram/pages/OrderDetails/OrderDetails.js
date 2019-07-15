const db = wx.cloud.database()
Page({
  data: {
    active: 0,
    list: [],
    activeContent: [],
    onGoing: [],//进行中，
   fullData:[]//全部数据
  },
  // 点击导航栏获取响应内容
  onChange(event) {
    // 获取下标
    let id = event.detail.index;
    // 获取当前点击标签内容
    var title = event.detail.title;
    console.log(title)
    // 查找已取消内容
    if (title == "已取消") {
      db.collection("count")
        .where({
          state: "已取消"
        })
        .get()
        .then(res => {
          console.log(res)
          this.setData({
            activeContent: res.data
          })
        })
        .catch(err => {
          console.log(err)
        })
      // 查找进行中内容
    } else if (title == "进行中") {
      db.collection("count")
        .where({
          state: "进行中"
        })
        .get()
        .then(res => {
          console.log(res)
          this.setData({
            onGoing: res.data
          })
        })
        .catch(err => {
          console.log(err)
        })
    } else (title == "全部")
    {
     db.collection("count")
     .get()
     .then(res=>{
       console.log(res)
       this.setData({
         fullData:res.data
       })
     })
     .catch(err=>{
       console.log(err)
     })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // // 接收上个页面传来的id值
    // var id = options.id;
    db.collection("count")
      .get()
      .then(res => {
        console.log(res)
        this.setData({
          list: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })

  },
  // 取消预约
  del(e) {
    wx.showModal({
      content: '确定取消预约吗',
      success: res=>{
        console.log(res)
        if (res.confirm) {
          // console.log('用户点击了确定')
          // 将数据库状态为进行中改为在查找取消的内容
          var id = e.target.dataset.delid;
          db.collection("count").doc(id).update({
            data: {
              state: "已取消",
            },
          }).then(res => {
            var onGoing = this.data.onGoing;
            // 由于是每次请求数据库页面无法实施刷新，故用数组api进行页面的刷新
            for (var i = 0; i < onGoing.length; i++) {
              // 保证当前点击的id等于已取消的id
              if (id == onGoing[i]._id) {
                // 利用splice删除当前点击的商品
                onGoing.splice(i, 1)
                // console.log(arr)
                // 然后将值重新付给onGoing
                this.setData({
                  onGoing: onGoing
                })
              }
            }
          }).catch(err => {
            console.log(err)
          })

        } else {
          console.log('用户点击了取消')
        }
      }
    })



   
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.setNavigationBarTitle({
      title: '我的订单',
    })
  },
  // 进行中订单详情页
  OrderGoing(e) {
    var id = e.currentTarget.dataset.goid
    console.log(id)
    // 点击进行中调到订单进行中页面
    wx.navigateTo({
      url: '/pages/OrderGoing/OrderGoing?id='+ id,
    })
  },
  // 点击已取消，跳转到详情页
  Aldel(e){
    var id = e.currentTarget.dataset.delid
    console.log(id)
    // 点击进行中调到订单进行中页面
    wx.navigateTo({
      url: '/pages/OrderDel/OrderDel?id=' + id,
    })
  },
// 点击全部跳转对应商品详情页
  delAll(e){
    // 判断当前点击list下标
    var id = e.currentTarget.dataset.allid
    var index = e.currentTarget.dataset.index;
    var st = this.data.fullData;
    if (st[index].state == "已取消") {
      wx.navigateTo({
        url: '/pages/OrderDel/OrderDel?id=' + id,
      })

   }else{
      wx.navigateTo({
        url: '/pages/OrderGoing/OrderGoing?id=' + id,
      })
   }

    console.log(e.currentTarget.dataset.index)
    
    // var gid = e.currentTarget.dataset.goid
    console.log(id)
    // console.log(gid)
   
    // var go = this.data.onGoing;
    // console.log(go)
    // console.log(st )
    // for(var i=0;i<st.length;i++){
    //   if (st[i].state == "已取消") {
    //     console.log("fef")
    //     wx.navigateTo({
    //       url: '/pages/OrderDel/OrderDel?id=' + id,
    //     })
    //   } else if (st[i].state == "进行中"){
    //     console.log("kkk")
    //     wx.navigateTo({
    //       url: '/pages/OrderGoing/OrderGoing?id=' + id,
    //     })
    //   }
    // }
    
    // 点击进行中调到订单进行中页面
    // wx.navigateTo({
    //   url: '/pages/OrderAll/OrderAll?id=' + id,
    // })

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