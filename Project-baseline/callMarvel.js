let api = require('marvel-api')
let MongoClient = require('mongodb').MongoClient

class Marvel {
  constructor(){
    this.marvel = api.createClient({
      publicKey: '07419ec59343f525079f6cccea583c1d',
      privateKey: '4f5f529078f1233922d32d58758d77661f575c3c'
    })
    this.url = 'mongod://localhost:21017/MarvelData'
  }

  getData(){ //callback here
    //For each character sourced from Marvel API
    //Create an object (of data) that pushes into
    //the array of characters
    let arrayCharacters = []
    let obj = {}
    this.marvel.characters.findAll()
      .then((characters) => {
        characters.data.forEach((character) => {
        obj = {
          name        : character.name,
          description : character.description,
          thumbnail   : character.thumbnail.path + "." + character.thumbnail.extension,
          link        : character.resourceURI
          }
        //console.log(obj)
        arrayCharacters.push(obj)
       })
        console.log(arrayCharacters)
      })
      //.fail(console.err)
      //.done
  }

  insertDocuments(){
    
  }
}
module.exports = Marvel
