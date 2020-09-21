//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    pull: false,
    background: [
      '/image/b1.jpg',
      '/image/b2.jpg',
      '/image/b3.jpg'
    ],
    selectTops: [
      {
        id:1,
        img:"/image/s1.png",
      },
      {
        id:2,
        img:"/image/s2.png"
      }
    ],
    selectBottom: "/image/s3.png",
    newestList: [{
        id: 1,
        name: "瓜子 100g",
        cost: "￥ 1",
        img: "/image/s5.png"
      },
      {
        id: 2,
        name: "芹菜 半斤",
        cost: "￥ 0.02",
        img: "/image/s6.png"
      },
      {
        id: 3,
        name: "素米 375g",
        cost: "￥ 0.03",
        img: "/image/s4.png"
      },
      {
        id: 4,
        name: "瓜子 100g",
        cost: "￥ 0.01",
        img: "/image/s4.png"
      },
      {
        id: 5,
        name: "芹菜 半斤",
        cost: "￥ 0.02",
        img: "/image/s5.png"
      },
      {
        id: 6,
        name: "瓜子 100g",
        cost: "￥ 1",
        img: "/image/s6.png"
      }
    ]
  },
  onPullDownRefresh: function () {
    if (!this.data.pull) {
      this.setData({
        pull: true,
        background: [
          '/image/b1.jpg',
          '/image/b2.jpg'
        ],
      })
    } else {
      this.setData({
        pull: false,
        background: [
          '/image/b1.jpg',
          '/image/b2.jpg',
          '/image/b3.jpg'
        ],
      })
    }

    wx.stopPullDownRefresh({ //需要手动调用取消
      success: (res) => {
        console.log("stop pull down")
      },
    })
  },
  queryCategoryClick: function (e) {
    var index = e.currentTarget.dataset.index
    wx.navigateTo({
    url: '/pages/component/list/list?index=' + index,
    })
  },
  queryItemClick: function (e) {
    var index = e.currentTarget.dataset.index
    var name = this.data.newestList[index].name
    var cost = this.data.newestList[index].cost
    var id = this.data.newestList[index].id
    var img = this.data.newestList[index].img
    wx.navigateTo({
      url: '/pages/component/detail/detail?id=' + id + '&name=' + name + '&img=' + img + '&cost=' + cost
    })
  }
})