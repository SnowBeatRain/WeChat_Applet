const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}
var app = getApp();
console.log(app)
Page({
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    year: date.getFullYear(),
    value: [9999, 1, 1],
    userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // text:"这是一个页面"
    array: ['Android', 'IOS', 'ReactNativ', 'WeChat', 'Web'],
    index: 0,
    time: '08:30',
    date: '2016-09-26',
    brands: [],
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    objectArray: [
      {
        brand: "博世",
        id: 0,
        array: ["博世喷油器配件", "博世传感器", "杰克赛尔配件", "博世油泵配件", "博世共轨管配件", "博世泵喷嘴"]
      },
      {
        brand: "德尔福",
        id: 1,
        array: ["德尔福喷油器配件", "德尔福传感器", "德尔福油泵", "德尔福共轨管配件", "德尔福滤清器", "德尔福电脑版ECU", "德尔福机油", "德尔福维修部件"]
      },
      {
        brand: "卡特",
        id: 2,
        array: ["卡特传感器", "卡特C7C9泵喷嘴", "卡特共轨配件"]
      },
      {
        brand: "康明斯",
        id: 3,
        array: ["西康配件", "东风康明斯", "福田康明斯"]
      }
    ],
    object: [],
    brandindex: 0,
    index1: 0
  },
  bindRegionChange:function(e){
  console.log(e)
  this.setData({
    region:e.detail.value
  })
  },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  /**
   * 监听普通picker选择器
   */
  listenerPickerSelected: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index: e.detail.value
    });
  },

  /**
   * 监听时间picker选择器
   */
  listenerTimePickerSelected: function (e) {
    console.log(e)

    //调用setData()重新绘制
    this.setData({
      time: e.detail.value,
    });
  },

  /**
   * 监听日期picker选择器
   */
  listenerDatePickerSelected: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindPickerChange0: function (e) {
    this.setData({ brandindex: e.detail.value, index1: 0 })
    var objectArray = this.data.objectArray
    this.setData({ object: objectArray[this.data.brandindex].array })
  },
  bindPickerChange1: function (e) {
    this.setData({
      index1: e.detail.value
    })
  },
  onLoad: function (options) {

    // 页面初始化 options为页面跳转所带来的参数
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    // 在没有 open-type=getUserInfo 版本的兼容处理
    wx.getUserInfo({
      success: res => {
        // app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
          // hasUserInfo: true
        })
      }
    })
    // }

    var objectArray = this.data.objectArray
    var brands = []
    for (var i = 0; i < objectArray.length; i++) {
      brands.push(objectArray[i].brand, )
    }
    this.setData({ brands: brands, object: objectArray[this.data.brandindex].array })



  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  }
})