exports = function() {
    console.log("Hello");
}

console.log(exports);
console.log(module.exports);

// both point to same object i.e. by reference

// Except when you set one of the objects = to something i.e. line 1
// This creates another object i.e. two different spots in memory