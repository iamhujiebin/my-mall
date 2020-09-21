// pages/component/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [{
        name: '果味',
        id: 'guowei'
      },
      {
        name: '蔬菜',
        id: 'shucai'
      },
      {
        name: '炒货',
        id: 'chaohuo'
      },
      {
        name: '点心',
        id: 'dianxin'
      },
      {
        name: '粗茶',
        id: 'cucha'
      },
      {
        name: '淡饭',
        id: 'danfan'
      }
    ],
    curIndex: 0,
    isScroll: false,
    toView: 'guowei',
    details:[
      {
        id:"guowei",
        banner:"/image/c1.png",
        title:"果味",
        products:[
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
          {
            icon:"/image/c2.png",
            text:"梨花带雨 5个"
          },
          {
            icon:"/image/c2.png",
            text:"梨花带雨 8个"
          },
        ]
      },
      {
        id:"shucai",
        banner:"/image/c1.png",
        title:"果味",
        products:[
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
          {
            icon:"/image/c2.png",
            text:"梨花带雨 8个"
          },
        ]
      },
      {
        id:"chaohuo",
        banner:"/image/c1.png",
        title:"果味",
        products:[
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
        ]
      },
      {
        id:"dianxin",
        banner:"/image/c1.png",
        title:"果味",
        products:[
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
        ]
      },
      {
        id:"cucha",
        banner:"/image/c1.png",
        title:"果味",
        products:[
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
        ]
      },
      {
        id:"danfan",
        banner:"/image/c1.png",
        title:"果味",
        products:[
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          }, {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },

          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
          {
            icon:"/image/c2.png",
            text:"梨花带雨 3个"
          },
        ]
      }
    ]
  },
  switchTab(e) {
    const self = this
    this.setData({
      isScroll: true
    })
    console.log(e.target.dataset.id)
    setTimeout(function () {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    }, 0)

    setTimeout(function () {
      self.setData({
        isScroll: false
      })
    }, 1)
  }
})