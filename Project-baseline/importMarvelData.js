let Marvel = require('./callMarvel')

let marvel = new Marvel()

//marvel.getData()

marvel.getData((arrayCharacters) => {
//  console.log(arrayCharacters)
  marvel.insertDocuments(arrayCharacters)
})

marvel.getMongoData('Ajak')

