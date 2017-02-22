const PouchDB = require('pouchdb-http')
const db = new PouchDB("http://localhost:3000/firstdb")
const {map, omit, compose, insert, prop} = require('ramda')


function getPerson(id, callMeMaybe) {
  db.get(id, function(err, resp) {
    if (err) return callMeMaybe(err)
    callMeMaybe(null, resp)
  })
}

function getPersons(callMeMaybe) {
  db.allDocs({include_docs: true,
              start_key: "person_",
              end_key: "person_\uffff"}, function(err, resp) {
    if (err) return callMeMaybe
    callMeMaybe(null, map(doc => doc.doc, resp.rows))              
  })
}


function addPerson(doc, callMeMaybe) {
  if (checkPersonRequiredValues(doc)) {
  db.put(prepNewPerson(doc), function(err, resp) {
    if (err) return callMeMaybe(err)
    callMeMaybe(null, resp)
  })
} else {
  return callMeMaybe({ErrorStatus: "404",
    ErrorMessage: "Error"
  })
 }
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


/////////////Helper functions //////////////////
function prepNewPerson(doc) {
  doc._id = "person_" + doc.firstName.toLowerCase() + "_" +  doc.lastName.toLowerCase() + "_" + doc.email.toLowerCase()
  doc.type = "person"
    return doc
}

function checkPersonRequiredValues(doc) {
  return prop("firstName", doc) && prop("lastName", doc) && prop("email", doc)
  return doc
}


const dal = {
  getPerson: getPerson,
  getPersons: getPersons,
  addPerson: addPerson,
  updatePerson: updatePerson,
  deletePerson: deletePerson
}
module.exports = dal
