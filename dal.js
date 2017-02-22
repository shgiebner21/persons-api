const PouchDB = require('pouchdb-http')
const db = new PouchDB("http://localhost:3000/firstdb")
const {map, omit, compose} = require('ramda')


function getPerson(id, callMeMaybe) {
  db.get(id, function(err, resp) {
    if (err) return callMeMaybe(err)
    callMeMaybe(null, resp)
  })
}


function addPerson(doc, callMeMaybe) {
  db.put(doc, function(err, resp) {
    if (err) return callMeMaybe(err)
    callMeMaybe(null, resp)
  })
}

function updatePerson(doc, callMeMaybe) {
  db.put(doc, function(err, resp) {
    if (err) return callMeMaybe(err)
    callMeMaybe(null, resp)
  })
}

function deletePerson(id, callMeMaybe) {
  db.get(id, function(err, doc) {
    if (err)  return callMeMaybe(err)
    db.remove(doc, function(err, resp) {
      if (err) return callMeMaybe(err)
      callMeMaybe(null, resp)
    })
  })
}



const dal = {
  getPerson: getPerson,
  addPerson: addPerson,
  updatePerson: updatePerson,
  deletePerson: deletePerson
}
module.exports = dal
