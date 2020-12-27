var a = 1;
var b = 2;
var c = a + b;

console.log(c);

// function statement
function greet() {
    console.log("hi");
}
greet();

// First class functions
function log(fn) {
    fn();
}
log(greet);

// function expression
var greeter = function() {
    console.log("Hello there!");
}
greeter();

log(greeter);