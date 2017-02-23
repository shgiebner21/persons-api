const app = require('express')()
const dal = require('./dal2.js')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080
const HTTPError = require('node-http-error')














app.listen(8080, function() {
  console.log("Example api listening on port ", port)
})
