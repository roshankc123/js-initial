function clock() {
  var data = new Date()
  var sec = data.getSeconds() * (360 / 60)
  var min = data.getMinutes() * (360 / 60)
  var hr = data.getHours() * (360 / 12)
  var sechand = document.querySelector('.seconds')
  var minhand = document.querySelector('.minutes')
  var hrhand = document.querySelector('.hrs')
  sechand.style.transform = 'rotate(' + sec + 'deg)'
  minhand.style.transform = 'rotate(' + min + 'deg)'
  hrhand.style.transform = 'rotate(' + hr + 'deg)'
  //   window.alert(data)
}
var interval = setInterval(clock, 1000)
