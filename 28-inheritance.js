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


class Car extends Vehicle {
    constructor(carType,company, enginePower, yearMfg) {
        super(company, enginePower, yearMfg);
        this.carType = carType;
    }
}

const cretaCar = new Car("SUV","Hyundai","1500CC",2024);
console.log(cretaCar);


class Truck extends Vehicle{
    constructor(weight,numberOfWheels,company,enginePower,yearMfg){
        super(company,enginePower,yearMfg);
        this.weight = weight;
        this.numberOfWheels = numberOfWheels;
    }
}

const truckTata = new Truck("300Ton",24,"TATA","5000CC",2023);
const truckData = truckTata.details();
console.log(truckData);
