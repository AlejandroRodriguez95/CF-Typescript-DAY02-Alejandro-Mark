var Human = /** @class */ (function () {
    function Human(name, age, job) {
        this.name = "";
        this.jobTitle = "Web Developer";
        this.name = name;
        this.age = age;
        this.jobTitle = job;
    }
    Human.prototype.hello = function () {
        document.write("Hello there, my name is " + this.name + ", and I am " + this.age + " years old, and I am a " + this.jobTitle);
    };
    return Human;
}());
var newHuman = new Human("Mark", 35);
console.table(newHuman);
newHuman.hello();
