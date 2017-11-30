//Day 3 Assignment
//Nick Baker

let api = require('marvel-api')
let program = require('commander')

let marvel = api.createClient({
    publicKey: '07419ec59343f525079f6cccea583c1d'
  , privateKey: '4f5f529078f1233922d32d58758d77661f575c3c'
})

program
  .command('avengersFunctional')
  .action(() => {
      console.log('Avengers are documented below')
        //log characters
      marvel.characters.findAll(3)
        .then(console.log)
        .fail(console.error)
        .done();
  })

program
  .command('avengersObjectOriented')
  .action(() => {
    console.log('testing version 2')
  })


program.parse(process.argv)

if(!program.args.length)  program.help()
