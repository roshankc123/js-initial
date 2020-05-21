// // // var date = new Date()
// // // document.body.innerHTML = date.getMonth() + '/' + date.getDate()

// // // var bib = 'this is the  "quotation" mark'
// // // var a = 5
// // // var b = 10
// // // var sum = a + b
// // // window.alert(date)
// // // document.body.innerHTML = sum
// // // // document.body.innerHTML = date
// // // var pens
// // // pens = ['red', 'green', 'orgage']
// // // var name
// // // name = new Array('hello', 'world', 'new', 'life')

// // // window.alert(name[0])

// // var first, second, result

// // function bigger(first, second) {
// //   first > second ? (result = [first]) : (result = [second])
// //   return result
// // }

// // window.alert(bigger(7, 2))

// // const name = 'bibek'
// // console.log(name)

// // var course = new Object()
// // course.name = 'Bibek Chalise'
// // course.address = 'gaindakot '
// // course.class = 'bachelor'
// // course.relation = 'single'

// // console.log(course)

// course = {
//   name: 'bibek',
//   address: 'gaindakot',
//   class: 'bachelor',
//   load: 0,
//   update: function count() {
//     return ++course.load
//   },
// }

// function Course(title, insturctor, level, views) {
//   this.title = title
//   this.insturctor = insturctor
//   this.level = level
//   this.views = views
//   this.updateViews = function () {
//     return ++this.views
//   }
// }

// // console.log(Course)
// var course02 = new Course('bibek chalise', 'samir', 13, 10)
// var result = course02
// console.log(result)
// var course03 = new Course()
// console.log(course02)

function domath() {
  var a = 5,
    b = 6,
    sum = a + b
  return sum
}

console.log(domath())

const CT = document.querySelector(' ')

if (CT.hasAttribute('target')) {
  console.log(CT.getAttribute('target'))
} else {
  CT.setAttribute('target', '_blank')
}
console.log(CT.attributes)

var bibek = document.querySelector('.feaured-iamg')
const theimage = bibek.querySelector('img')
