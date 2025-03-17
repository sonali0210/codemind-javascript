class Car {
    constructor(carType, company, enginePower){
        this.company = company;
        this.carType = carType;
        this.enginePower = enginePower;
    }

    priceAdd(p1,p2){
        if(arguments.length == 1){
            console.log(`Extra Charge Items: ${2000000 + p1}`);
        }
        if(arguments.length == 2){
            console.log(`Extra Charge Items: ${2000000 + p1 + p2}`);
        }
    }

    details(price){
        console.log(`Car Details: ${this.carType}, ${this.company}, ${this.enginePower}`);
        console.log(`Price: ${price}`);
    }

    details(priceNum,yearMfg){
        console.log("details...............");
        console.log(`Price in number is: ${priceNum}`);
        console.log(`Year of Manufacture: ${yearMfg}`);     
    }
}

const creta = new Car("Xuv","Hyundai","1500CC");
creta.priceAdd(5000);
creta.priceAdd(20000,4000);



