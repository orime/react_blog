let ipUrl = 'http://127.0.0.1:7001/default/'

let servicePath = {
  getArticleList: ipUrl+'getArticleList', // 首页文章列表
  getArticleById: ipUrl+'getArticleById/', // 根据Id获取文章详情
  getTypeInfo: ipUrl+'getTypeInfo/', // 获得问这个呢类别
  getListById: ipUrl+'getListById/', // 根据文章类型获取对应文章列表
}

export default servicePath
