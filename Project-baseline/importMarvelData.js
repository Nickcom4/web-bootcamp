let Marvel = require('./callMarvel')

let marvel = new Marvel()

//marvel.getData()

marvel.getData((arrayCharacters) => {
  marvel.insertDocuments(arrayCharacters)
})

