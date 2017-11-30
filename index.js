//Day 3 Assignment
//Nick Baker

let program = require('commander')
let Marvel = require('./marvel')

program
  .command('avengersFunctional')
  .action(() => {
      console.log('Avengers are documented below')
        //log characters
      let marvel = new Marvel()
      marvel.getCharacters()
  })

/*
program
  .command('avengersObjectOriented')
  .action(() => {
    console.log('testing version 2')
  })
*/


program.parse(process.argv)

if(!program.args.length)  program.help()
