let express = require('express')
let app = express()

app.use('/', express.static('app'))

app.set('port', process.env.PORT || process.env.VCAP_APP_PORT || 3000)

// Start Express server
let server = app.listen(app.get('port'), function() {
  console.log(`Express is running on port ${app.get('port')}`)
})
/*
let MongoClient = require('mongodb').MongoClient
 
// Connection URL
let url = 'mongodb://localhost:27017/MarvelData'
// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {
  console.log("MongoDB is running on: %s", url)
 
//  db.close()
})
*/
