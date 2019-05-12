window.Model = function (options) {
  let resourceName = options.resourceName
  return {
    init: function () {
      let APP_ID = 'XYJ1ba9XpR8z36entWg7nI63-9Nh9j0Va'
      let APP_KEY = 'BwPCsREu0Xgfih6PJIGJwAcc'
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      })
    },
    // 获取数据
    fetch: function () {
      let query = new AV.Query(resourceName)
      return query.find() // Promise 对象
    },
    // 添加到leancloud的指定库中
    save: function (options) {
      let Resource = AV.Object.extend(resourceName)
      let resource = new Resource()
      return resource.save(options) // Promise 对象
    }
  }
}
