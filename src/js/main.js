import '../css/loading.css'
import '../css/main.css'

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
})
