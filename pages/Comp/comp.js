//获取应用实例
var app = getApp()
Page({
  data: {
    // 轮播
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    // tabbar
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
    scrollLeft: 0,
  },
  onLoad: function () {
    var that = this;
    /**
     * 获取系统信息
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  /**
     * 滑动切换tab
     */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
    if (e.detail.current > 1) {
      var a = e.detail.current
      var query = wx.createSelectorQuery()
      query.select('.scrollBox').boundingClientRect(function (res) {
        var b = res.width
        that.setData({
          scrollLeft: (a - 1) * 125
        })
      })
      query.selectViewport().scrollOffset()
      query.exec(function (res) {
      })
    } else {
      var a = e.detail.current
      this.setData({
        scrollLeft: 0
      })
    }

  },
  /**
   * 点击tab切换
   */
  swichNav: function (e) {
    var that = this;
    console.log(e.target)
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

})

