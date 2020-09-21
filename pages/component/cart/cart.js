// pages/component/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [], // 购物车列表
    hasList: false, // 列表是否有数据
    totalPrice: 0, // 总价，初始为0
    selectAllStatus: true, // 全选状态，默认全选
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      hasList: true,
      carts: [{
          id: 1,
          title: '新鲜芹菜 半斤',
          image: '/image/s5.png',
          num: 4,
          price: 0.01,
          selected: true
        },
        {
          id: 2,
          title: '素米 500g',
          image: '/image/s6.png',
          num: 1,
          price: 0.03,
          selected: true
        }
      ]
    });
    this.getTotalPrice()
  },
  getTotalPrice() {
    let carts = this.data.carts;
    let total = 0;
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].selected) {
        total += carts[i].num * carts[i].price;
      }
    }
    this.setData({
      carts: carts,
      totalPrice: total.toFixed(2)
    })
  },
  minusCount(e) {
    const index = e.currentTarget.dataset.index
    let carts = this.data.carts
    let num = carts[index].num
    if (num <= 1) {
      return false
    }
    num = num - 1
    carts[index].num = num
    this.setData({
      carts: carts
    })
    this.getTotalPrice();
  },
  addCount(e) {
    const index = e.currentTarget.dataset.index
    let carts = this.data.carts
    let num = carts[index].num
    num = num + 1
    carts[index].num = num
    this.setData({
      carts: carts
    })
    this.getTotalPrice();
  },
  deleteList(e) {
    const index = e.currentTarget.dataset.index
    let carts = this.data.carts
    carts.splice(index, 1)
    this.setData({
      carts: carts,
    })
    if (carts.length <= 0) {
      this.setData({
        hasList: false,
      })
    } else {
      this.getTotalPrice()
    }
  },
  selectList(e) {
    const index = e.currentTarget.dataset.index
    let carts = this.data.carts
    const selected = carts[index].selected
    carts[index].selected = !selected
    this.setData({
      carts: carts,
    })
    this.getTotalPrice()
  },
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice();
  }
})