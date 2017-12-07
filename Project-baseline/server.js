let MongoClient = require('mongodb').MongoClient
 
// Connection URL
let url = 'mongodb://localhost:27017/comics'
// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {
  console.log("Connected correctly to server")
 
  db.close()
})
