import './app3.css'
import $ from 'jquery'

const $square = $('#square')

$square.on('click', () => {
  $square.toggleClass('active') //如果有就删除，如果没有就增加
})
