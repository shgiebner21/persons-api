console.log("Welcome to the persons-api.")

const dal = require('./dal.js')
const app = require('express')()
const port = process.env.PORT || 8080
const bodyParser = require('body-parser')
const HTTPError = require('node-http-error')


app.use(bodyParser.json())


app.get('/persons', function(req, resp, next) {
  dal.getPersons(function(err, people) {
    if (err) return next(new HTTPError(err.status, err.message, err))
    resp.status(201).send(people)
  })
})

app.get('/persons/:id', function(req, resp, next) {
  dal.getPerson(req.params.id, function(err, person) {
    if (err) return next(new HTTPError(err.status, err.message, err))
    resp.status(201).send(person)
  })
})

app.post('/persons', function(req, resp, next) {
  dal.addPerson(req.body, function(err, person) {
    if (err) return next(new HTTPError(err.status, err.message, err))
    resp.send(person)
  })
})


app.put('/persons/:id', function(req, resp, next) {
  dal.updatePerson(req.body, function(err, person) {
    if (err) return next(new HTTPError(err.status, err.message, err))
    resp.send(person)
  })
})

app.delete('/persons/:id', function(req, resp, next) {
  dal.deletePerson(req.params.id, function(err, person) {
    if (err) return next(new HTTPError(err.status, err.message, err))
    resp.send(person)
  })
})


////////////////// Error Handler //////////////////////
app.use(function(err, req, resp, next) {
  console.log(req.method, " ", req.path, " err: ", err)
  resp.status(err.status || 500)
  resp.send(err)
})
////////////////// Error Handler //////////////////////

app.listen(port, function() {
  console.log("Example api listening on port ", port)
})
