"use strict";

var Greetr = require("./greeter");

var greeter1 = new Greetr();

greeter1.on("greet", function(data) {
    console.log("Someone greeted!: " + data);
});

greeter1.greet("Andrew");