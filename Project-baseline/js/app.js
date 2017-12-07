import Dashboard from './containers/dashboard'
/*
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert')
 
// Connection URL
var url = 'mongodb://localhost:27017/comics'
// Use connect method to connect to the Server
MongoClient.connect(url, (err, db)=> {
  assert.equal(null, err)
  console.log("Connected correctly to server")
 
  db.close()
})
*/
export default class App {
  constructor() {
    document.body.style.background = 'url("/images/background.png") no-repeat center center fixed'
    document.body.style.backgroundSize = 'cover'
    document.body.style.height = '100%'
    document.body.style.margin = '0'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundAttachment = 'fixed'

    let content = document.getElementById('content')
    content.append()

    let dashboard = new Dashboard()
    content.append(dashboard.getContent())
  }

}

let app = new App()
window.app = app
