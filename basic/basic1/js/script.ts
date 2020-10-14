class Human{
    name = "";
    age:number;
    jobTitle = "Web Developer";
    constructor(name:string, age:number, job?:string)
    {
        this.name = name;
        this.age = age;
        this.jobTitle = job;
    }
    hello(){
        document.write(`Hello there, my name is ${this.name}, and I am ${this.age} years old, and I am a ${this.jobTitle}`);
    }
}

let newHuman = new Human("Mark", 35);

console.table(newHuman);
newHuman.hello();


