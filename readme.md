# Persons API readme

### Getting started


```
$ mkdir persons-api
$ git clone <https://github.com/shgiebner21/persons-api.git>
$ cd persons-api
$ npm install
$ node start
```

### `Getting a list of persons from the database`

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



### `Getting a person from the database`

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


### `Adding a person to the database`

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

### `Updating a person to the database`

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


### `Deleting a person from the database`

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


### `Getting a list of addresses from the database`

#### Endpoints

- `/addresses`

#### parameters
- all addresses

### Example call:

```
GET /addresses
```

#### Example response:

```
{
  "_id": "address_person_dennis_clark_chode@aol.com_1234_kiawah_island",
  "_rev": "2-8f44821fd18e59226aba9acc60d91d24",
  "person_id": "person_dennis_clark_chode@aol.com",
  "type": "address",
  "address_type": "vacation",
  "street": "1234 Kiawah Island",
  "city": "Kiawah",
  "state": "South Carolina",
  "zip": 29434
}
.
.
{another address object
}
```


### `Getting an address from the database`

#### Endpoints

- `/addresses/:id`

#### parameters
- `id`  The primary key of the address to retrieve from the db.


### Example call:

```
GET /addresses/address_person_dennis_clark_chode@aol.com_1234_kiawah_island
```

#### Example response:

```
{
  "_id": "address_person_dennis_clark_chode@aol.com_1234_kiawah_island",
  "_rev": "2-8f44821fd18e59226aba9acc60d91d24",
  "person_id": "person_dennis_clark_chode@aol.com",
  "type": "address",
  "address_type": "vacation",
  "street": "1234 Kiawah Island",
  "city": "Kiawah",
  "state": "South Carolina",
  "zip": 29434
}
```

#### Common errors:
- Requesting an address not in the database (404)
```
{
  "name": "not_found",
  "status": 404,
  "message": "missing",
  "reason": "missing",
  "error": "not_found"
}
```

### `Adding an address to the database`

#### Endpoints
- N/A

#### parameters
- Include the object to be added or updated.

```
{
  "_id": "address_person_bruce_wayne_batSignal@gmail.com_120_wayne_manor",
  "person_id": "person_bruce_wayne_batman@gmail.com",
  "type": "address",
  "address_type": "home",
  "street": "Wayne Manor",
  "city": "Gotham",
  "state": "New York",
  "zip": 55555
}
```

### Example put:
- In Postman, Select __Post__ and data-type __JSON__.

#### Example response:

```
{
  "ok": true,
  "id": "address_person_bruce_wayne_batSignal@gmail.com_120_wayne_manor",
  "rev": "1-c1dc2346c37b4872986d8e9c29a6b9a5"
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


### `Updating an address to the database`

#### Endpoints
- `/addresses/:id`

#### parameters
- Include the object to be updated (WITH updates included).

```
{
  "_id": "address_person_bruce_wayne_batSignal@gmail.com_1_fairway_lane",
  "_rev": "2-f0585ef6991679ee0384910b91351ed0",
  "person_id": "person_bruce_wayne_batman@gmail.com",
  "type": "address",
  "address_type": "vacation",
  "street": "21 Fairway Lane",
  "city": "Paradise Island",
  "island": "Grand Bahamas",
  "postal code": "PAR 21"
}
```

### Example put:
- In Postman, Select __Put__ and data-type __JSON__.

#### Example response:

```
{
  "ok": true,
  "id": "address_person_bruce_wayne_batSignal@gmail.com_1_fairway_lane",
  "rev": "2-f0585ef6991679ee0384910b91351ed0"
}
```

#### Common errors:
-



### `Deleting an address from the database`

#### Endpoints
- `/addresses/:id`

#### parameters
- `id`  The primary key of the address to retrieve from the db.

### Example call:
```
DELETE /addresses/address_person_bruce_wayne_batSignal@gmail.com_1_fairway_lane
```


#### Example response:

```
{
  "ok": true,
  "id": "address_person_bruce_wayne_batSignal@gmail.com_1_fairway_lane",
  "rev": "3-a9d6a74f2cd73aac393ed0cf1085c866"
}
```

#### Common errors:
- Trying to delete an address not in the database:
```
{
  "name": "not_found",
  "status": 404,
  "message": "deleted",
  "reason": "deleted",
  "error": "not_found"
}
```
