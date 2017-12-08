let program = require('commander')
let Marvel = require('./callMarvel')

let marvel = new Marvel()

marvel.getData((arrayCharacters) => {
  marvel.insertDocuments(arrayCharacters)
})

//marvel.getMongoData('Ancient One')
