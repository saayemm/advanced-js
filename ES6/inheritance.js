class Vehicle{
    constructor(name,price){
        this.name = name;
        this.price = price
    }
    move(){
        console.log("vehicle should move. Right?");
    }
}

class Bus extends Vehicle{
    constructor(name,price,brand,ticket){
        super(name,price);
        this.brand = brand;
        this.ticket = ticket
    }
}

class Truck extends Vehicle{
    constructor(name,price,load){
        super(name,price);
            this.load = load
        }
}
