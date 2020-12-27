var EventEmitter = require("events");
var util = require("util");

function Greetr() {
    // Adds everything that EventEmitter has access to
    EventEmitter.call(this); // Super constructor. Keeps Event Emitter consistent with object
    this.greeting = "Hello world!";
}

// Connects the prototypes
util.inherits(Greetr, EventEmitter); // All Greetr objects get EventEmitter props

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ": " + data);
    this.emit("greet", data);
}

var greeter1 = new Greetr();

greeter1.on("greet", function(data) {
    console.log("Someone greeted!: " + data);
});

greeter1.greet("Andrew");