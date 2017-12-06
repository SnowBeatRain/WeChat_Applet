// // pages/storage/storage.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     latitude :"",
//     longitude :""
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
//     wx.setStorage({
//       key: 'token',
//       data: 'woshitoken11111',
//     })

//     // 同步获取
//     // wx.getStorage({
//     //   key: 'token',
//     //   success: function (res) {
//     //     console.log(res.data)
//     //   },
//     // })
//     var value = wx.getStorageSync('token')
//     console.log(value)
//     // 异步获取
//     // try {
//     //   var value = wx.getStorageSync('token')
//     //   console.log(value)
//     //   if (value) {
//     //     // Do something with return value
//     //   }
//     // } catch (e) {
//     //   // Do something when catch error
//     // }
//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {
//     wx.getLocation({
//       type: 'gcj02', //返回可以用于wx.openLocation的经纬度
//       success: function (res) {
//         var latitude = res.latitude
//         var longitude = res.longitude
//         // wx.openLocation({
//         //   latitude: latitude,
//         //   longitude: longitude,
//         //   scale: 28
//         // })
//       }
//     })
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

//   }
// })

// 动画
Page({
  data: {
    animationData: {}
  },
  onShow: function () {
    // 创建一个动画 
    var animation = wx.createAnimation({
      duration: 1000,  //时间
      timingFunction: "ease",//运动曲线
      delay:0,
      transformOrigin:'50% 50% 0'
    })

    this.animation = animation

    animation.scale(2, 2).rotate(45).step();

    this.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      animation.translate(30).step();
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 1000)
  },
  // rotateAndScale: function () {
  //   // 旋转同时放大
  //   this.animation.rotate(45).scale(2, 2).step()
  //   this.setData({
  //     animationData: animation.export()
  //   })
  // },
  // rotateThenScale: function () {
  //   // 先旋转后放大
  //   this.animation.rotate(45).step()
  //   this.animation.scale(2, 2).step()
  //   this.setData({
  //     animationData: animation.export()
  //   })
  // },
  // rotateAndScaleThenTranslate: function () {
  //   // 先旋转同时放大，然后平移
  //   this.animation.rotate(45).scale(2, 2).step()
  //   this.animation.translate(100, 100).step({ duration: 1000 })
  //   this.setData({
  //     animationData: animation.export()
  //   })
  // }
})
