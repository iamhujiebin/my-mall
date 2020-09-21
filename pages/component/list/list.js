// pages/component/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentList: [],
    list: [
      {
        id: 1,
        list: [{
            img: "/image/s4.png",
            text: "瓜子 100g",
            cost: "￥ 0.01"
          },
          {
            img: "/image/s5.png",
            text: "瓜子 100g",
            cost: "￥ 0.01"
          },
          {
            img: "/image/s6.png",
            text: "瓜子 100g",
            cost: "￥ 0.01"
          },
          {
            img: "/image/s4.png",
            text: "瓜子 100g",
            cost: "￥ 0.01"
          }
        ]
      },
      {
        id: 2,
        list: [{
            img: "/image/s4.png",
            text: "瓜子 100g",
            cost: "￥ 0.01"
          },
          {
            img: "/image/s5.png",
            text: "瓜子 100g",
            cost: "￥ 0.01"
          },
        ]
      },
      {
        id: 3,
        list: [{
            img: "/image/s4.png",
            text: "瓜子 100g",
            cost: "￥ 0.01"
          },
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.index)
    this.setData({
      currentList: this.data.list[options.index].list,
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