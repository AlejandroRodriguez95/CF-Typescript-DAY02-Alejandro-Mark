class Vehicle{
    name:string;
    image:string;
    wheels:number;
    seats:number;
    kmLeft:number;
    year:number;
    constructor(name:string, image:string, seats:number, km:number, year:number, wheels?:number)
    {
        this.name = name;
        this.kmLeft = km;
        this.image = image;
        this.year = year;
        this.seats = seats;
        this.wheels = wheels;
    }

    showPrice(){
        return 
    }   
}

class Motorbikes extends Vehicle{
    type:string;
    wheels = 2;
    constructor(name:string, image:string, seats:number, kmLeft:number, year:number, type:string)
    {
        super(name, image, seats, kmLeft, year);
        this.type = type;
    }
    calculatePrice(){
        return (this.seats * 300 + this.kmLeft * 3 + this.wheels * 100 + (10000-(2020-this.year)*100));
    }
}

class Truck extends Vehicle{
    cargo:string;
    constructor(name:string, image:string, seats:number, km:number, year:number, cargo:string, wheels: number)
    {
        super(name, image, seats, km, year, wheels);
        this.cargo = cargo;
    }
    calculatePrice(){
        return (this.seats * 300 + this.kmLeft * 3 + this.wheels * 100 + (10000-(2020-this.year)*100));
    }
}

var motorbike1 = new Motorbikes('bike1', '../img/img1.jpg', 1, 1000, 2010, 'offroad');
var truck1 = new Truck('truck1', '../img/img2.jpg', 3, 5000, 2015, 'cows', 6);
var motorbike2 = new Motorbikes('bike2', '../img/img3.jpg', 1, 9950, 2019, 'racing');
console.table(motorbike1);
console.table(motorbike2);
console.table(truck1);

var price1 = motorbike1.calculatePrice();
var price2 = motorbike2.calculatePrice();
var price3 = truck1.calculatePrice();

document.write(`Price of motorbike1 is ${price1}, price of motorbike2 is ${price2}, price of truck1 is ${price3}`);

