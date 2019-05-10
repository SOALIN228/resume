!function () {
  let view = document.querySelector('#siteMessage')

  let model = {
    init: function () {
      let APP_ID = 'XYJ1ba 9XpR8z36entWg7nI63-9Nh9j0Va'
      let APP_KEY = 'BwPCsREu0Xgfih6PJIGJwAcc'
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      })
    },
    // 获取数据
    fetch: function () {
      let query = new AV.Query('Message')
      return query.find() // Promise 对象
    },
    // 添加到leancloud的Message库中
    save: function (name, content) {
      let Message = AV.Object.extend('Message')
      let message = new Message()
      return message.save({ // Promise 对象
        name,
        content
      })
    }
  }

  let controller = {
    view: null,
    model: null,
    messageList: null,
    form: null,
    init: function (view, model) {
      this.view = view
      this.model = model

      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('#postMessageForm')
      this.model.init()
      this.loadMessages()
      this.bindEvents()
    },
    loadMessages: function () {
      this.model.fetch().then((messages) => {
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
      this.model.save(name, content).then(function (object) {
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}:${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.append(li)
        myForm.querySelector('input[name=content]').value = ''
      })
    }
  }

  controller.init(view, model)
}.call()
