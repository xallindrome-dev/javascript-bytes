var fs = require("fs");
var zlib = require("zlib"); // compressed file

var readable = fs.createReadStream(__dirname + "/lorem.txt"//, 
// {
//     encoding: "utf8",
//     highWaterMark: 32 * 1024 // how many bytes per chunk
// }
);

var writable = fs.createWriteStream(__dirname + "/lorem_copy.txt");

// readable.on("data", function(chunk){
//     console.log(chunk.length);
//     writable.write(chunk);
// });

// code above and the pipe function are the same result

readable.pipe(writable);

// compressing it
var compressed = fs.createWriteStream(__dirname + "/lorem.txt.gz");

var gzip = zlib.createGzip(); // duplex stream and compresses it

readable.pipe(gzip).pipe(compressed); // could even send this to a database for compression