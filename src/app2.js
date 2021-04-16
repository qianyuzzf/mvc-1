import './app2.css'
import $ from 'jquery'

const $tabBar = $('#app2 #tab-bar')
const $tabContent = $('#app2 #tab-content')

$tabBar.on('click', 'li', e => {
  const $li = $(e.currentTarget)
  $li.addClass('selective').siblings().removeClass('selective') //样式与行为分离
  const index = $li.index()
  //   $tabContent.children().eq(index).css({ display: 'block' }).siblings().css({ display: 'none' })
  //   $tabContent.children().eq(index).show().siblings().hide()
  $tabContent.children().eq(index).addClass('active').siblings().removeClass('active') //样式与行为分离
})

$tabBar.children().eq(0).trigger('click')
