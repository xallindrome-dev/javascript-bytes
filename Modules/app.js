// not a variable, just pulls it in
//require("./greet.js");

// variable and without .js extension
var greet = require("./greet");
greet();

var person = {
    firstname: "John",
    lastname: "Doe",
    greet: function() {
        console.log("Hello, " + this.firstname + " " + this.lastname);
    }
};

person.greet();

console.log(person["firstname"]);

// Prototypal Inheritance
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function() {
    console.log("Hello, " + this.firstname + " " + this.lastname);
}

var john = new Person("John", "Doe");
john.greet();

var jane = new Person("Jane", "Doe");
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);