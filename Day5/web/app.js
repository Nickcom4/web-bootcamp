let express = require('express')
let app = express()
let path = require('path')

app.get('/', (request, response) => {
  //How to send an .html file to my server
//  response.send('Hello')
  response.sendfile('./dom.html')
})

app.use('/', express.static(path.join(__dirname+'/')))

app.listen('3000', () => {
  console.log('express is listening on port 3000')
})

