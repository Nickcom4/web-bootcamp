//Day 3 Assignment
//Nick Baker

let api = require('marvel-api')
let myApp = require('commander')

let marvel = api.createClient({
    publicKey: '07419ec59343f525079f6cccea583c1d'
  , privateKey: '4f5f529078f1233922d32d58758d77661f575c3c'
})

myApp
  .command('heros')
  .action(() => {
      console.log('heros are documented below')
      marvel.characters.findAll()
        .then(console.log)
        .fail(console.error)
        .done();
  })

myApp.parse(process.argv)

if(!myApp.args.length) {
  myApp.help()
}
