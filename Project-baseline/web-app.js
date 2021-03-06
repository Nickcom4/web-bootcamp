let express = require('express')
let app = express()
let MongoClient = require('mongodb').MongoClient

app.use('/', express.static('app'))

app.get('/characters', (request, response) => {
  //reference: https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp
  MongoClient.connect('mongodb://localhost:27017/MarvelData',(err, db) => { 
    if (err) throw err
    db.collection("characters").find({}).toArray((err, result) => {
      if (err) throw err
      //console.log(result)
      response.json(result)
      db.close()
    });
  })
})
//test with curl:
//curl http://localhost:3000/characters
//or for pretty format use:
//curl http://localhost:3000/characters | python -m json.tool

app.set('port', process.env.PORT || process.env.VCAP_APP_PORT || 3000)

// Start Express server
let server = app.listen(app.get('port'), function() {
  console.log(`Express is running on port ${app.get('port')}`)
})
