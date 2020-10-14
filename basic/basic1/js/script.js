var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, age, job) {
        if (job === void 0) { job = "Web Developer"; }
        this.name = "";
        this.name = name;
        this.age = age;
        this.jobTitle = job;
    }
    Human.prototype.hello = function () {
        var result = "Hello there, my name is " + this.name + ", and I am " + this.age + " years old, and I am a " + this.jobTitle + ".";
        return result;
    };
    return Human;
}());
var newHuman = new Human("Mark", 30);
console.table(newHuman);
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, job, salary, location) {
        if (job === void 0) { job = "Web Developer"; }
        var _this = _super.call(this, name, age, job) || this;
        _this.salary = salary;
        _this.location = location;
        return _this;
    }
    Employee.prototype.hello = function () {
        return _super.prototype.hello.call(this) + " I earn " + this.salary + " and work at " + this.location + ".";
    };
    return Employee;
}(Human));
var newEmployee = new Employee("Mark", 30, "Developer", "shitloads of money", "shady company");
document.write(newEmployee.hello());
