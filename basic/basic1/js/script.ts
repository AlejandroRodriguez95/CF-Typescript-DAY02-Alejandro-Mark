class Human{
    name = "";
    age:number;
    jobTitle:string;
    constructor(name:string, age:number, job:string= "Web Developer")
    {
        this.name = name;
        this.age = age;
        this.jobTitle = job;
        } 
    hello(){
        var result = `Hello there, my name is ${this.name}, and I am ${this.age} years old, and I am a ${this.jobTitle}.`
        return result;
    }
}

var newHuman = new Human("Mark", 30);

console.table(newHuman);

class Employee extends Human {
    salary:any;
    location:string;
    constructor(name:string, age:number, job:string= "Web Developer", salary:any, location:string) {
        super(name, age, job);
        this.salary = salary;
        this.location = location;
    }
    hello() {
        return `${super.hello()} I earn ${this.salary} and work at ${this.location}.`;
    }
}
var newEmployee = new Employee("Mark", 30, "Developer", "shitloads of money", "shady company");
document.write(newEmployee.hello())
