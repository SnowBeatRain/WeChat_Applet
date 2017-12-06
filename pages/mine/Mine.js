// // pages/mine/Mine.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {

//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   },
//   clickMe: function () {
//     // 微信支付
//     // wx.requestPayment({
//     //   'timeStamp': '15000011',
//     //   'nonceStr': '1231231313131',
//     //   'package': 'zsasdadad',
//     //   'signType': 'MD5',
//     //   'paySign': '',
//     //   'success': function (res) {
//     //     wx.showToast({
//     //       title: '成功',
//     //       icon: 'success',
//     //       duration: 2000
//     //     })
//     //   },
//     //   'fail': function (res) {
//     //     // wx.showToast({
//     //     //   title: '失败',
//     //     //   icon: 'fail',
//     //     //   duration: 2000
//     //     // })
//     //     console.log(res)
//     //   }
//     // })
//     wx.chooseAddress({
//       success: function (res) {
//         console.log(res)
//       }
//     })
//   }
// })
var util = require('../../utils/util.js');

var inputContent = {}
var types = ['default', 'primary', 'warn']
var pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    inputContent: {}
  },
  onPullDownRefresh: function () {
    wx.startPullDownRefresh({
      success: function (res) {
        wx.showToast({
          title: '成功',
        })
      }
    })
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
    console.log('circle 下一页');
  },
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad")
    wx.showModal({
      success: function (res) {
        if (wx.canIUse('showModal.cancel')) {
          console.log(res.cancel+11)
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")

  },
  onReady: function (e) {
    console.log("onReady")
    console.log(util.getUrl)
    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('firstCanvas')

    context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()
    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()
  },
  clickMe: function () {

    wx.chooseAddress({
      success: function (res) {
        console.log(res)
      }
    })
  },
  // 获取input中的值
  bindBlur: function (e) {
    inputContent = e.detail.value    //字符串
    // inputContent[e.currentTarget.id] = e.detail.value    //数组对象    
    console.log(inputContent)
  },
  setDisabled: function (e) {
    // this.setData({
    //   disabled: !this.data.disabled
    // })


    //导航跳转 
    wx.redirectTo({
      url: '../index/scan/scan'
    })
  },
  setPlain: function (e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function (e) {
    this.setData({
      loading: !this.data.loading
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
}

for (var i = 0; i < types.length; ++i) {
  (function (type) {
    pageObject[type] = function (e) {
      var key = type + 'Size'
      var changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(types[i])
}

Page(pageObject)