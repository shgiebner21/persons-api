# Persons API readme

## Getting started

```
$ git clone <some github url>
$ cd persons-ape
$ npm install
$ node app.js
```

### Endpoints

- `/persons/:id`

#### parameters
- `id`  The primary key of the person to retrieve from the db.


### Example call:

```GET /persons/person_mary_demos_maryd@gmail.com```

### Example response:

```{
_id: "person_mary_demos_maryd@gmail.com",
_rev: "2-06f0851ef1f0979d8cbe915990dc019c",
type: "person",
firstName: "Mary",
lastName: "Demos",
email: "maryd@gmail.com",
cellPhone: "843-622-1234"
}```
