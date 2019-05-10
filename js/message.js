var APP_ID = 'XYJ1ba9XpR8z36entWg7nI63-9Nh9j0Va'
var APP_KEY = 'BwPCsREu0Xgfih6PJIGJwAcc'

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

var query = new AV.Query('Message')
query.find().then(function (messages) {
  let array = messages.map((item) => item.attributes)
  array.forEach((item) => {
    let li = document.createElement('li')
    li.innerText = item.content
    let messageList = document.querySelector('#messageList')
    messageList.append(li)
  })
}).then(function () {
  // 更新成功
}, function (error) {
  // 异常处理
  alert('提交失败，请改天再来留言')
})

let myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit', function (e) {
  e.preventDefault()
  let content = myForm.querySelector('input[name=content]').value
  let Message = AV.Object.extend('Message')
  let message = new Message()
  message.save({
    content
  }).then(function (object) {
    window.location.reload()
    console.log(object)
  })
})
