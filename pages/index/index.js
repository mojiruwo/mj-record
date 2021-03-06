const app = getApp();
// 创建页面实例对象
Page({
  /**
   * 页面名称
   */
  name: "",
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    indicatorDots: true,
    indicatorActiveColor:'#ffffff',
    autoplay: true,
    interval: 5000,
    duration: 1000,
    backgroundimg:"https://ws2.sinaimg.cn/large/006tNc79gy1fgphwt8nq8j30e609f3z4.jpg",
    list: [
      {
        'id': '1',
        'image': 'https://ws1.sinaimg.cn/large/006tNc79gy1fgphwnl37mj30dw09agmg.jpg',
        'image': '/images/demo.jpg',
        'title': '对话产品总监 | 深圳·北京PM大会 【深度对话小米/京东/1号店/百度等产品总监】',
        'num':'2532722',
        'time':'03:39',
        'date': '10月09日 17:59',
        'address': '深圳市·南山区',
        'author': 'admin'
      },
      {
        'id': '1',
        'image': 'https://ws1.sinaimg.cn/large/006tNc79gy1fgphwn44hvj30go0b5myb.jpg',
        'title': 'AI WORLD 2016世界人工智能大会',
        'num':'380',
        'time':'03:39',
        'date': '10月09日 17:39',
        'address': '北京市·朝阳区',
        'author': 'admin'
      },
      {
        'id': '1',
        'image': 'https://ws2.sinaimg.cn/large/006tNc79gy1fgphwt8nq8j30e609f3z4.jpg',
        'title': 'H100太空商业大会',
        'num':'500',
        'time':'03:39',
        'date': '10月09日 17:31',
        'address': '大连市',
        'author': 'admin'
      },
      {
        'id': '1',
        'image': 'https://ws2.sinaimg.cn/large/006tNc79gy1fgphwokqt9j30dw0990tb.jpg',
        'title': '【报名】年度盛事，大咖云集！2016凤凰国际论坛邀您“与世界对话”',
        'num':'150',
        'time':'03:39',
        'date': '10月09日 17:21',
        'address': '北京市·朝阳区',
        'author': 'admin'
      },
      {
        'id': '1',
        'image': 'https://ws3.sinaimg.cn/large/006tNc79gy1fgphwqsvh6j30go0b576c.jpg',
        'title': '新质生活 · 品质时代 2016消费升级创新大会',
        'num':'217',
        'time':'03:39',
        'date': '10月09日 16:59',
        'address': '北京市·朝阳区',
        'author': 'admin'
      },
      {
        'id': '1',
        'image': 'http://ww3.sinaimg.cn/large/6f7cd9c7gw1e5b7q1aqarj20sg101qa1.jpg',
        'title': '新质生活 · 品质时代 2016消费升级创新大会',
        'num':'217',
        'time':'03:39',
        'date': '10月09日 16:59',
        'address': '北京市·朝阳区',
        'author': 'admin'
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    let that = this;
    //that.list();
  },
  list(){
    let that = this;
    //调用接口获取所有字段
    var data = {token:config.TOKEN}
    http.httpGet("/api/article/videoindex" ,data,function(res){
        console.log(res);
        that.setData({
          list: res,
          backgroundimg: res[0].bg_image,
          activeid: res[0].id,
          share_title: res[0].title,
          share_desc: res[0].title
        })
        wx.setNavigationBarTitle({
          title: res[0].title
        })
    });
  },
  changevideo(e){
    console.log(e);
    this.setData({
      backgroundimg: this.data.list[e.detail.current].image,
      activeid: this.data.list[e.detail.current].id,
      share_title: this.data.list[e.detail.current].title,
      share_desc: this.data.list[e.detail.current].title,
    })
    wx.setNavigationBarTitle({
      title: this.data.list[e.detail.current].title
    })
  },
  onPullDownRefresh() {
      let that = this
      //that.list();
      wx.stopPullDownRefresh()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {

  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {

  }
  //以下为自定义点击事件
})

