console.log("------- Method Overriding --------");

class Vehicle {
    constructor(company, enginePower, yearMfg){
        this.company = company;
        this.enginePower = enginePower;
        this.yearMfg = yearMfg;
    }
    details(){
        console.log(`Company: ${this.company}, Engine Power: ${this.enginePower}, Year of Manufacturing: ${this.yearMfg}`)
    }
}

// Child or Derived Class
class Car extends Vehicle {
    constructor(carType,company, enginePower, yearMfg) {
        super(company, enginePower, yearMfg);
        this.carType = carType;
    }
    details(){
        console.log(`Car Type: ${this.carType}, Company: ${this.company}, Engine Power: ${this.enginePower}, Year of Manufacturing: ${this.yearMfg}`)
    }
}

// Child or Derived Class
class Truck extends Vehicle{
    constructor(weight,numberOfWheels,company,enginePower,yearMfg){
        super(company,enginePower,yearMfg);
        this.weight = weight;
        this.numberOfWheels = numberOfWheels;
    }
    details(){
        console.log(`Car Weight: ${this.weight}, Number Of Wheels: ${this.numberOfWheels}, Company: ${this.company}, Engine Power: ${this.enginePower}, Year of Manufacturing: ${this.yearMfg}`)
    }
}

const cretaCar = new Car("SUV","Hyundai","1500CC",2024);
cretaCar.details();

const truckTata = new Truck("300Ton",24,"TATA","5000CC",2023);
truckTata.details();