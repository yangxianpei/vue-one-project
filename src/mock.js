import Mock from 'mockjs' // 引入mockjs

const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

let data = [] //轮播图
let data2 = [] //新闻列表
let data3 = []//新闻详情

let data4 = []//评论信息
let comments = []

let photo = [] //图片分享
let photoimage = []


let suoluetu=[]


let goodsinfo=[]
let goodsxiangxiinfo=[]


let size = ['320x150']
// , '250x250', '240x400', '336x280', 
// '180x150', '720x300', '468x60', '234x60', 
// '88x31', '120x90', '120x60', '120x240', 
// '125x125', '728x90', '160x600', '120x600', 
// '300x600'
// 定义随机值
for (let i = 0; i < 3; i++) { // 可自定义生成的个数
  let template = {
    // 'Boolean': Random.boolean, // 可以生成基本数据类型
    'price': Random.natural(1, 10000), // 生成1到100之间自然数
    'Integer': Random.integer(1, 100), // 生成1到100之间的整数
    // 'Float': Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
    // 'Character': Random.character(), // 生成随机字符串,可加参数定义规则
    // 'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
    // 'Range': Random.range(0, 10, 2), // 生成一个随机数组
    // 'Date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
    'Image': Random.image(size, Random.color(), '320x150')// Random.size表示将从size数据中任选一个数据
    // 'Color': Random.color(), // 生成一个颜色随机值
    // 'Paragraph':Random.paragraph(2, 5), //生成2至5个句子的文本
    // 'Name': Random.name(), // 生成姓名
    // 'Url': Random.url(), // 生成web地址
    // 'Address': Random.province() // 生成地址
  }


  data.push(template)

}

for (let i = 0; i < 50; i++) {
  let template2 = {
    'title': Random.ctitle(),
    'id': i,
    'Paragraph': Random.cparagraph(2, 5),
    'Date': Random.datetime(),
    'click': Random.integer(1, 100),
    'Image': Random.image('40x40', Random.color(), '40x40')
  }
  data2.push(template2)
}

for (let i = 0; i < 50; i++) {
  let template3 = {
    'id': i,
    'title': Random.ctitle(),
    'click': Random.integer(1, 100),
    'Paragraph': Random.cparagraph(20, 40),
    'Date': Random.datetime(),
  }
  data3.push(template3)
}
// Mock.mock('/data/index', 'post', data) // 根据数据模板生成模拟数据
export default Mock.mock('http://g.cn', data)

//新闻列表
export var title = Mock.mock('http://f.cn', data2)
//新闻详情
export var content = Mock.mock('http://c.cn', data3)



//评论数据
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    let template4 = {

      'id': i,
      'Name': Random.cname(),
      'Paragraph': Random.cparagraph(1, 2),
      'Date': Random.date(),
      'click': Random.integer(1, 100)
    }
    data4.push(template4)
  }
  comments.push(data4)

}

export var comm = Mock.mock("http://s.cn", comments)


//滑动列表
for (let i = 0; i < 5; i++) {
  let a = ['全部', '科技', '财经', '军事', '人才']
  let template5 = {
    'id': i,
    'title': a[i],
  }
  photo.push(template5)
}


export var p = Mock.mock("http://p.cn", photo)

//图片
let temp = []
var n = 0
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    let template6 = {
      'id':n++,
      'Image': Random.image('320x200', Random.color(), '320x200'),
      'Paragraph': Random.cparagraph(2, 3)
    }
    photoimage.push(template6)

  }
  temp.push(photoimage)
}


export var image = Mock.mock("http://i.cn", temp)


  for(let j=0;j<2;j++){
    let template7= {
      'id':n++,
      'src': Random.image('800x800', Random.color(), '800x800'),
      'msrc':Random.image('240x200', Random.color(), '240x200')
    }
    suoluetu.push(template7)
  }
  

export var suolue = Mock.mock("http://suo.cn", suoluetu)


var n=0;
for(let j=0;j<10;j++){
  let template8= {
    'id':n++,
    'Name': Random.name(),
    'pricenow': Random.integer(1, 100),
    'priceold': Random.integer(1, 10000),
    'stock': Random.integer(1, 100),
    'msrc':Random.image('240x200', Random.color(), '240x200')
  }
  goodsinfo.push(template8)
}
export var goods = Mock.mock("http://goods.cn", goodsinfo)



for(let i=0;i<10;i++){
  let template9= {

    'price': Random.integer(1, 10000),
    'stock': Random.integer(1, 100),
  }
  goodsxiangxiinfo.push(template9)
}
 


export var goodsxiangxi = Mock.mock("http://goodsxiangxi.cn", goodsxiangxiinfo)