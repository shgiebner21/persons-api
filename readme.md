# Persons API readme

### Getting started


```
$ mkdir persons-api
$ git clone <https://github.com/shgiebner21/persons-api.git>
$ cd persons-api
$ npm install
$ node start
```

### Getting a list of persons from the database

#### Endpoints

- `/persons`

#### parameters
- all persons

### Example call:

```
GET /persons
```

#### Example response:

```
{
_id: "person_mary_demos_maryd@gmail.com",
_rev: "2-06f0851ef1f0979d8cbe915990dc019c",
type: "person",
firstName: "Mary",
lastName: "Demos",
email: "maryd@gmail.com",
cellPhone: "843-622-1234"
}
.
.
{another person object
}
```



### Getting a person from the database

#### Endpoints

- `/persons/:id`

#### parameters
- `id`  The primary key of the person to retrieve from the db.


### Example call:

```
GET /persons/person_mary_demos_maryd@gmail.com
```

#### Example response:

```
{
_id: "person_mary_demos_maryd@gmail.com",
_rev: "2-06f0851ef1f0979d8cbe915990dc019c",
type: "person",
firstName: "Mary",
lastName: "Demos",
email: "maryd@gmail.com",
cellPhone: "843-622-1234"
}
```

#### Common errors:
- Requesting a person not in the database (404)
```
{
  "name": "not_found",
  "status": 404,
  "message": "missing",
  "reason": "missing",
  "error": "not_found"
}
```


### Adding a person to the database

#### Endpoints
- N/A

#### parameters
- Include the object to be added or updated.

```
{
  "_id": "person_steve_martin_funnyMan@gmail.com",
  "type": "person",
  "firstName": "Steve",
  "lastName": "Martin",
  "email": "funnyMan@gmail.com",
  "cellPhone": "555-622-4000"
}
```

### Example put:
- In Postman, Select __Post__ and data-type __JSON__.

#### Example response:

```
{
  "ok": true,
  "id": "person_aziz_ansari_SCFunnyMan@gmail.com",
  "rev": "1-63e267d2c303300ac6227ee50b33de8a"
}
```

#### Common errors:
- Trying to add person already in database
```
{
  "name": "conflict",
  "status": 409,
  "message": "Document update conflict.",
  "reason": "Document update conflict.",
  "error": "conflict"
}
```

### Updating a person to the database

#### Endpoints
- `/persons/:id`

#### parameters
- Include the object to be added or updated.

```
{
  "_id": "person_michael_giebner_mikegiebner@aol.com",
  "_rev": "3-81c621337f063ac6972759b6cd7f219d",
  "type": "person",
  "firstName": "Michael",
  "lastName": "Giebner",
  "email": "mikegiebner@gmail.com",
  "cellPhone": "803-622-5555"
}
```

### Example put:
- In Postman, Select __Put__ and data-type __JSON__.

#### Example response:

```
{
  "ok": true,
  "id": "person_michael_giebner_mikegiebner@aol.com",
  "rev": "4-d7eac88ecb244e56955ccfb07ffae215"
}
```

#### Common errors:
-


### Deleting a person from the database

#### Endpoints
- `/persons/:id`

#### parameters
- `id`  The primary key of the person to retrieve from the db.

### Example call:
```
DELETE /persons/person_mary_demos_maryd@gmail.com  
```


#### Example response:

```
{
  "ok": true,
  "id": "person_steve_martin_FunnyMan@gmail.com",
  "rev": "4-2c17b001f5c16626bc6f5cb1a963db7f"
}
```

#### Common errors:
- Trying to delete an item not in the database:
```
{
  "name": "not_found",
  "status": 404,
  "message": "deleted",
  "reason": "deleted",
  "error": "not_found"
}
```
