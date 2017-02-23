const PouchDB = require('pouchdb-http')
const db = new PouchDB("http://localhost:3000/firstdb")
const {map, omit, compose, insert, prop} = require('ramda')


function getPersons(limit, callMeMaybe) {
  db.allDocs({include_docs: true,
              limit: limit,
              start_key: "person_",
              end_key: "person_\uffff"}, function(err, resp) {
    if (err) return callMeMaybe(err)
    callMeMaybe(null, map(doc => doc.doc, resp.rows))
  })
}

function getPerson(id, callMeMaybe) {
  db.get(id, function(err, resp) {
    if (err) return callMeMaybe(err)
    callMeMaybe(null, resp)
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

///////////// Address section //////////////////

function getAddresses(callMeMaybe) {
  db.allDocs({include_docs: true,
              start_key: "address_",
              end_key:   "address_\uffff" }, function(err, resp) {
    if (err) return callMeMaybe(err)
    callMeMaybe(null, map(addr => addr.doc, resp.rows))
  })
}

function getAddress(id, callMeMaybe) {
  db.get(id, function(err, resp) {
    if (err) return callMeMaybe(err)
    callMeMaybe(null, resp)
  })
}

function createAddress(doc, callMeMaybe) {
  db.put(prepNewAddress(doc), function(err, resp) {
    if (err) return callMeMaybe(err)
    callMeMaybe(null, resp)
  })
}

function updateAddress(address, callMeMaybe) {
  db.put(address, function(err, resp) {
    if (err) return callMeMaybe(err)
    callMeMaybe(null, resp)
  })
}

function deleteAddress(address, callMeMaybe) {
  db.get(address, function(err, doc) {
    console.log("inside deleteAddress, sending address to db.remove with ", address)
    if (err) return callMeMaybe(err)
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


function prepNewAddress(doc) {
  console.log("inside prepNewAddress with doc of ", doc)
  doc._id = "address_" + doc.person_id.toLowerCase() + "_" + doc.street.toLowerCase()
  doc.type = "address"
  return doc
}


const dal = {
  getPerson: getPerson,
  getPersons: getPersons,
  addPerson: addPerson,
  updatePerson: updatePerson,
  deletePerson: deletePerson,
  getAddresses: getAddresses,
  getAddress: getAddress,
  createAddress: createAddress,
  updateAddress: updateAddress,
  deleteAddress: deleteAddress
}
module.exports = dal
