!function () {
  let specialTags = document.querySelectorAll('[data-x]')
  for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
  }

  window.addEventListener('scroll', function () {
    findClosestAndRemoveOffset()
  })

// 移除距离顶部最近的属性，达到偏移动画的效果
  function findClosestAndRemoveOffset () {
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
      if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = i
      }
    }

    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brothersAndMe = li.parentNode.children
    for (let i = 0; i < brothersAndMe.length; i++) {
      brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
  }

// 监听鼠标在导航栏上移动
  let liTags = document.querySelectorAll('nav.menu > ul > li')
  for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
      x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
      x.currentTarget.classList.remove('active')
    }
  }

  window.autoSlideUp = {
    findClosestAndRemoveOffset: findClosestAndRemoveOffset
  }
}.call()
