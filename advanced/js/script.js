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
var Vehicle = /** @class */ (function () {
    function Vehicle(name, image, seats, km, year, wheels) {
        this.name = name;
        this.kmLeft = km;
        this.image = image;
        this.year = year;
        this.seats = seats;
        this.wheels = wheels;
    }
    Vehicle.prototype.showPrice = function () {
        return;
    };
    return Vehicle;
}());
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(name, image, seats, kmLeft, year, type) {
        var _this = _super.call(this, name, image, seats, kmLeft, year) || this;
        _this.wheels = 2;
        _this.type = type;
        return _this;
    }
    Motorbikes.prototype.calculatePrice = function () {
        return (this.seats * 300 + this.kmLeft * 3 + this.wheels * 100 + (10000 - (2020 - this.year) * 100));
    };
    return Motorbikes;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(name, image, seats, km, year, cargo, wheels) {
        var _this = _super.call(this, name, image, seats, km, year, wheels) || this;
        _this.cargo = cargo;
        return _this;
    }
    Truck.prototype.calculatePrice = function () {
        return (this.seats * 300 + this.kmLeft * 3 + this.wheels * 100 + (10000 - (2020 - this.year) * 100));
    };
    return Truck;
}(Vehicle));
var motorbike1 = new Motorbikes('bike1', '../img/img1.jpg', 1, 1000, 2010, 'offroad');
var truck1 = new Truck('truck1', '../img/img2.jpg', 3, 5000, 2015, 'cows', 6);
var motorbike2 = new Motorbikes('bike2', '../img/img3.jpg', 1, 9950, 2019, 'racing');
console.table(motorbike1);
console.table(motorbike2);
console.table(truck1);
var price1 = motorbike1.calculatePrice();
var price2 = motorbike2.calculatePrice();
var price3 = truck1.calculatePrice();
document.write("Price of motorbike1 is " + price1 + ", price of motorbike2 is " + price2 + ", price of truck1 is " + price3);
