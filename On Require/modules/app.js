var greet1 = require("./greet1");
var greet2 = require("./greet2");

greet1();

greet2.greet(); // way one
var greet21 = require("./greet2").greet; // way two
 greet21();

 var greet3 = require("./greet3");
 greet3.greet();
 greet3.greeting = "Changed hello world!";

 var greet3b = require("./greet3");
 greet3.greet(); // calling the same module will cache it and not create another module.exports


 var Greet4 = require("./greet4"); // solves 3s differently
 var g = new Greet4();
 g.greeting = "Hello my world!"
 g.greet();
 var g2 = new Greet4();
 g2.greet();

 // revealing module pattern
 var greet5 = require("./greet5");
 greet5.greet();