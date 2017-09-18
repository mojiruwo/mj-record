var strRe = /\[(\d{2}:\d{2})\.\d{2,}\](.*)/;

Page({
  data: {
    playing: false,
    recordinfo: {
      dataUrl:'http://mp3.flash127.com/music/27442.mp3',
      coverImgUrl:'http://ww3.sinaimg.cn/large/6f7cd9c7gw1e5b7q1aqarj20sg101qa1.jpg',
      title:'my music',
      zan:true
    }
  },
  onLoad: function (param) {
    this.setData({
      currentId: param.id
    })
  },
  onReady: function () {
  },
  onShow: function () {
  },
  zantoggle: function(){
    var that = this;
    var zan = that.data.recordinfo.zan?false:true;
    that.setData({
      'recordinfo.zan': zan
    });
  },
  playingtoggle: function(){
    var that = this;
    var dataUrl = that.data.recordinfo.dataUrl;
    wx.playBackgroundAudio({
      dataUrl: dataUrl,
      title: that.data.recordinfo.title,
      coverImgUrl: that.data.recordinfo.coverImgUrl,
      success:(res) => {
        var playing = that.data.playing?false:true;
        if(!playing)
          wx.pauseBackgroundAudio();
        that.setData({
          playing: playing
        });
      }
    })
  },
  formatTime: function (time) {
    time = Math.floor(time);
    var m = Math.floor(time / 60).toString();
    m = m.length < 2 ? '0' + m : m;

    var s = (time - parseInt(m) * 60).toString();
    s = s.length < 2 ? '0' + s : s;

    return `${m}:${s}`;
  }
})