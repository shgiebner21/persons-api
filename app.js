console.log("Welcome to the persons-api.")

const dal = require('./dal.js')
const app = require('express')()



app.get('/persons/:id', function(req, resp) {
  dal.getPerson(req.params.id, function(err, person) {
    if (err) return resp.send(err)
    resp.send(person)
  })
})





app.listen(8080, function() {
  console.log("Example api listening on port 8080!")
})
