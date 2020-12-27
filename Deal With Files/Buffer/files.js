var fs = require("fs");

var greet = fs.readFileSync(__dirname + "/greet.txt", "utf8");
console.log(greet);

// Buffer sits on the heap in V8 (on the memory heap) These files will sit there for a long time. Need to close the stream
var greet2 = fs.readFile(__dirname + "/greet.txt", "utf8", function(err, data) {
    console.log(data);
});

console.log("Done!");