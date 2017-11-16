var colors = ['yellow', 'blue', 'pink', 'grey']
var arr = [["Le bonheur est parfois caché dans l'inconnu.", 'samuel'],
['Les mots se muent en maux lorsqu’ils indisposent, agressent ou blessent.', 'sam'],
["C'est juste un mauvais jour, pas une mauvaise vie", 'bassem']
]

var getRandomElement = function (list) {
  var len = list.length
  var randomIndex = Math.floor(Math.random() * len)
  return list[randomIndex]
}

function getItem () {
  var quote = getRandomElement(arr)
  var color = getRandomElement(colors)

  document.querySelector('body').style.backgroundColor = color
  document.querySelector('#something').innerHTML = quote[0]
  document.querySelector('#auteur').innerHTML = quote[1]
  document.querySelector('a').setAttribute('href', 'https://twitter.com/intent/tweet?text=' + quote[0])
}

var button = document.querySelector('button')

button.onclick = getItem
