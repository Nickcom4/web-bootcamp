let api = require('marvel-api')
let MongoClient = require('mongodb').MongoClient

class Marvel {
  constructor(){
    this.marvel = api.createClient({
      publicKey: '07419ec59343f525079f6cccea583c1d',
      privateKey: '4f5f529078f1233922d32d58758d77661f575c3c'
    })
    this.url = 'mongodb://localhost:27017/MarvelData'
  }

  getData(callback){ //callback here
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
        //console.log(arrayCharacters)
      callback(arrayCharacters)
      })
      //.fail(console.err)
     // .done
      return arrayCharacters
  }

  insertDocuments(docs){
    MongoClient.connect(this.url, (err, db) => {
     if(!err){
       let collection = db.collection('characters')
         collection.insertMany(docs, (err, result) => {
         console.log(result)
       })
       db.close()
     }
     else {
       console.log(err)
     }
    })
  }

  getMongoData(callback){
    MongoClient.connect(this.url, (err, db) => {
      if (!err){
        let query = { name: '' }
        query.name = callback
        db.collection('characters').find(query).toArray((err, result) => {
          //callback(result)
         // console.log(result)
          db.close
        })
      }
      else console.err
    })
    //return result
  }
    
}
module.exports = Marvel
