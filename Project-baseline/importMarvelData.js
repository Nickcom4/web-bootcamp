let Marvel = require('./callMarvel')

let marvel = new Marvel()

marvel.getData()

/*
marvel.getData((array) => {
  marvel.insertDocuments(array)
})
*/
