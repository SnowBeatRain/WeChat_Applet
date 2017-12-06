// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.min.js');
var wxMarkerData = [];
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    allLatLng: {},
    placeData: {},
    controls: [{
      id: 1,
      iconPath: '../../img/qr_code.png',
      position: {
        left: 20,
        top: 520,
        width: 50,
        height: 50
      },
      clickable: true
    },
    {
      id: 2,
      iconPath: '../../img/qr_code.png',
      position: {
        left: 165,
        top: 260,
        width: 50,
        height: 50
      },
      clickable: true
    },
    ],
    mapCtx: ""
  },
  onLoad: function () {
    var regexp = RegExp();
    console.log("RegExp" === regexp.constructor);
    wx.setTopBarText({
      text: '个人小程序置顶'
    })
    // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
    if (wx.openBluetoothAdapter) {
      wx.openBluetoothAdapter()
    } else {

      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'gnwSyg1V2xa128k5Ag1F9tU6St6rEPvm'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var wxMarkerData = data.wxMarkerData;
      that.setData({
        markers: wxMarkerData
      });
      that.setData({
        latitude: wxMarkerData[0].latitude
      });
      that.setData({
        longitude: wxMarkerData[0].longitude
      });

    }
    // 发起POI检索请求 
    BMap.search({
      "query": '饭店',
      fail: fail,
      success: success,
      // 此处需要在相应路径放置图片文件 
      iconPath: '../../img/marker_red.png',
      // 此处需要在相应路径放置图片文件 
      iconTapPath: '../../img/marker_red.png'
    });

  },
  makertap: function () {
    console.log(111)
  },
  // 点击跳转立即用车页面
  jumpScan: function () {
    wx.navigateTo({
      url: 'scan/scan',
    })
  },
  // 点击控件触发事件
  controltap: function (e) {
    console.log(e.controlId);
  },

  onReady: function (e) {    // 使用 wx.createMapContext 获取 map 上下文 
    this.mapCtx = wx.createMapContext('map')
  },

  // 视野改变触发事件
  changeView: function () {
    // console.log(2222)
    var that = this
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res)

        // that.setData({
        //   latitude: res.latitude
        // });
        // that.setData({
        //   longitude: res.longitude
        // });
      }
    })

    // this.moveToLocation()
  },
  // moveToLocation: function () {
  //   this.mapCtx.moveToLocation()
  // }

})