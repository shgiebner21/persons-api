const PouchDB = require('pouchdb-http')
const db = new PouchDB("http://localhost:3000/firstdb")
const {map, omit, compose} = require('ramda')


function getPerson(id, callMeMaybe) {
  db.get(id, function(err, resp) {
    if (err) return callMeMaybe(err)
    callMeMaybe(null, resp)
  })
}















const dal = {
  getPerson: getPerson
}
module.exports = dal
