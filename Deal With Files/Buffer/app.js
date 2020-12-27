var buf = new Buffer("Hello", "utf8"); // utf8 is default (converts this to binary data)
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write("wo");
console.log(buf.toString());

// ES6 Typed Arrays
var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer); // Converts the buffer into any structure 
view[0] = 5;
view[1] = 15;
console.log(view);