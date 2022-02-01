# Models

Contains all the models for validating incoming request data. These can be in the form of classes called by the controller or schemas used by routes.

Below are examples of how to implement the schemas into the controllers

### Checking Validity of Request Data

```typescript
// Inializing sample request
let request =   {
  name: "jimmy",
  desc: "is a person",
  price: 50,
  brand: "Okay???",
  seller: "anon",
  stock: 25,
  other: {
    broken: true
  }
}

// running built in function to validate
product_schema.validate(request).catch(function (err){
  err.name; // returns error type
  err.errors; // returns which fields are false
});
```

### Casting returned data from db
```typescript
// creating sample response from db
let db_response = {
  name: "jimmy",
  desc: "is a person",
  price: 50,
  brand: "Okay???",
  seller: "anon",
  stock: 25
};

let response = product_schema.cast(db_response);
/*
console.log(response) => {
  stock: 25,
  seller: 'anon',
  brand: 'Okay???',
  currency: 'CAD', // this field is added in as the indicated default value
  price: 50,
  desc: 'is a person',
  name: 'jimmy'
}
*/
```