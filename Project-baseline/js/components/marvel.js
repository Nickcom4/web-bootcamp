let api = require('marvel-api')

let marvel = api.createClient({
    publicKey: '07419ec59343f525079f6cccea583c1d'
  , privateKey: '4f5f529078f1233922d32d58758d77661f575c3c'
})

class Marvel {
  constructor() {
  }

  getCharacters(){
    marvel.characters.findAll(2)
      .then(console.log)
      .fail(console.error)
      .done();
  }
}

module.exports = Marvel


