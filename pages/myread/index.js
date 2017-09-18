Page({
  data: {
    list: [
      {
        'id': '1',
        'image': 'https://ws1.sinaimg.cn/large/006tNc79gy1fgphwnl37mj30dw09agmg.jpg',
        'title': '对话产品总监 | 深圳·北京PM大会 【深度对话小米/京东/1号店/百度等产品总监】',
        'num':'304',
        'time':'03:39',
        'date': '10月09日 17:59',
        'address': '深圳市·南山区'
      },
      {
        'id': '1',
        'image': 'https://ws1.sinaimg.cn/large/006tNc79gy1fgphwn44hvj30go0b5myb.jpg',
        'title': 'AI WORLD 2016世界人工智能大会',
        'num':'380',
        'time':'03:39',
        'date': '10月09日 17:39',
        'address': '北京市·朝阳区'
      },
      {
        'id': '1',
        'image': 'https://ws2.sinaimg.cn/large/006tNc79gy1fgphwt8nq8j30e609f3z4.jpg',
        'title': 'H100太空商业大会',
        'num':'500',
        'time':'03:39',
        'date': '10月09日 17:31',
        'address': '大连市'
      },
      {
        'id': '1',
        'image': 'https://ws2.sinaimg.cn/large/006tNc79gy1fgphwokqt9j30dw0990tb.jpg',
        'title': '【报名】年度盛事，大咖云集！2016凤凰国际论坛邀您“与世界对话”',
        'num':'150',
        'time':'03:39',
        'date': '10月09日 17:21',
        'address': '北京市·朝阳区'
      },
      {
        'id': '1',
        'image': 'https://ws3.sinaimg.cn/large/006tNc79gy1fgphwqsvh6j30go0b576c.jpg',
        'title': '新质生活 · 品质时代 2016消费升级创新大会',
        'num':'217',
        'time':'03:39',
        'date': '10月09日 16:59',
        'address': '北京市·朝阳区'
      },
      {
        'id': '1',
        'image': 'http://ww3.sinaimg.cn/large/6f7cd9c7gw1e5b7q1aqarj20sg101qa1.jpg',
        'title': '新质生活 · 品质时代 2016消费升级创新大会',
        'num':'217',
        'time':'03:39',
        'date': '10月09日 16:59',
        'address': '北京市·朝阳区'
      }
    ]
  },
  scrollR: function(e){
    /*this.setData({
      list: this.data.list.concat(this.data.list),
    });*/
  },

  onLoad: function (e) {
    this.scrollR(e);
  },

  scroll: function(e){
    this.scrollR(this.data.offset);
  }
})