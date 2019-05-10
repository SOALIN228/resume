var APP_ID = 'XYJ1ba9XpR8z36entWg7nI63-9Nh9j0Va'
var APP_KEY = 'BwPCsREu0Xgfih6PJIGJwAcc'

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
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
    console.log('存入成功')
    console.log(object)
  })
})
