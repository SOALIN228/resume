!function () {
  let view = document.querySelector('#siteMessage')
  let controller = {
    view: null,
    messageList: null,
    form: null,
    init: function (view) {
      this.view = view
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('#postMessageForm')
      this.initAV()
      this.loadMessages()
      this.bindEvents()
    },
    initAV: function () {
      var APP_ID = 'XYJ1ba9XpR8z36entWg7nI63-9Nh9j0Va'
      var APP_KEY = 'BwPCsREu0Xgfih6PJIGJwAcc'
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      })
    },
    loadMessages: function () {
      let query = new AV.Query('Message')
      query.find().then((messages) => {
        let array = messages.map((item) => item.attributes)
        array.forEach((item) => {
          let li = document.createElement('li')
          li.innerText = `${item.name}:${item.content}`
          this.messageList.append(li)
        })
      })
    },
    bindEvents: function () {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault()
        this.saveMessage()
      })
    },
    saveMessage: function () {
      let myForm = this.form
      let name = myForm.querySelector('input[name=name]').value
      let content = myForm.querySelector('input[name=content]').value
      // 添加到leancloud的Message库中
      let Message = AV.Object.extend('Message')
      let message = new Message()
      message.save({
        name,
        content
      }).then(function (object) {
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}:${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.append(li)
        myForm.querySelector('input[name=content]').value = ''
      })
    }
  }
  controller.init(view)
}.call()
