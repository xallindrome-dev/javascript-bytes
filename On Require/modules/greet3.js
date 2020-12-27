function Greetr() {
    this.greeting = "Hello world3!!";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();