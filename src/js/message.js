!function () {
  let view = View('#siteMessage')

  let model = Model({resourceName: 'Message'})

  let controller = Controller({
    messageList: null,
    form: null,
    init: function (view, model) {
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('#postMessageForm')
      this.loadMessages()
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
      this.model.save({name, content}).then((object) => {
        this.updateMessage(object)
        // 置空内容栏
        myForm.querySelector('input[name=content]').value = ''
      })
    },
    updateMessage: function (object) {
      let li = document.createElement('li')
      li.innerText = `${object.attributes.name}:${object.attributes.content}`
      let messageList = document.querySelector('#messageList')
      console.log(messageList)
      messageList.prepend(li)
    }
  })

  controller.init(view, model)
}.call()
