let express = require('express')
let app = express()
//let MongoClient = require('mongodb').MongoClient

app.use('/', express.static('app'))

app.get('/characters', (request, response) => {
  //response.send('some data')
  response.json(
    [
      {
        name: 'This is server side',
        description: 'Servant of The King Most High',
        thumbnail: 'https://cdn.shopify.com/s/files/1/0387/7073/files/Tree-of-life-spring_large.jpg?18148057159891282181',
        link: 'https://www.google.com',
        linkText: 'Click here for more info'
      }
    ]
    )
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
