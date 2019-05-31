import '../css/loading.css'
import '../css/main.css'
import '../css/input.scss'

import './sticky-topbar'
import './auto-slide-up'
import './smoothly-navigation'
import './init-swiper'
import './message'

$(function () {
  siteWelcome.classList.remove('active')
  // 移除offset完成偏移动画
  window.autoSlideUp.findClosestAndRemoveOffset()
  document.documentElement.style.overflow = ''

  let btn = document.querySelector('.mouse-cursor-gradient-tracking')
  btn.onmousemove = function (e) {
    let x = e.pageX - btn.offsetLeft - btn.offsetParent.offsetLeft
    let y = e.pageY - btn.offsetTop - btn.offsetParent.offsetTop
    btn.style.setProperty('--x', x + 'px')
    btn.style.setProperty('--y', y + 'px')
  }

  $('#swiper').on('click', 'img', function (e) {
    let targeId = e.currentTarget.id
    if (targeId === 'work1') {
      window.open('https://soalin228.github.io/mycanvas/index.html')
    } else if (targeId === 'work2') {
      window.open('https://soalin228.github.io/Pikachu/index.html')
    } else if (targeId === 'work3') {
      window.open('https://soalin228.github.io/nav-demo/index.html')
    }
  })
})
