// pages/ui/ui.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nvabarData: {
      showCapsule: 0, //是否显示左上角图标   1表示显示    0表示不显示
      title: '自定义组件', //导航栏 中间的标题
      white: true, // 是就显示白的，不是就显示黑的。
    },
    showtoptips: false,
    slideButtons: [{
      text: '喜欢',
      src: "/pages/img/icon_love.png", // icon的路径
    }, {
      text: '收藏',
      extClass: 'test',
      src: "/pages/img/icon_star.png", // icon的路径
    }, {
      type: 'warn',
      text: '删除',
      extClass: 'test',
      src: "/pages/img/icon_del.png", // icon的路径
    }],
    
  },
  touchStart(e) {
    console.log(e)
    this.setData({
      left: e.changedTouches[0].clientX
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 定义导航栏的高度   方便对齐
    wx.getSystemInfo({
      success: res => {
        this.setData({
          height: res.statusBarHeight
        })
      }
    });
   
  },
  // 读取组件传递的参数
  realNameConfirm(e) {
    this.setData({
      value: e.detail
    })
  },

  //  展示提示组件
  showToptips() {
    this.setData({
      showtoptips: true
    });
    setTimeout(() => {
      this.setData({
        showtoptips: false
      })
    }, 3000)
  },
  // 展示loading组件
  showLoading(){
    wx.navigateTo({
      url: '/pages/loading/loading',
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