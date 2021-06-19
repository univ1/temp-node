// CommonJS, every file is a module (by default)
// Modules = Encapsulated code (only share minimum: PoLP)

// Object destructuring is used here, an alternative
// is to just save the object in a names variable and
// then do sayHi(names.john) and sayHi(names.peter).
// By destructuring, we are setting the variables john
// and peter to equal the values that are stored in the keys
// john and peter in the imported object.
const {john, peter} = require("./4-names.js");
const sayHi = require("./5-utils.js");
const data = require("./6-alternative-flavor.js");
require("./7-mind-grenade.js"); // simply executes the module

console.log(data);
console.log(data.items);
console.log(data.singlePerson);

sayHi("susan");
sayHi(john);
sayHi(peter);
