function Greetr() {
    this.greeting = "Hello world4!!";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;