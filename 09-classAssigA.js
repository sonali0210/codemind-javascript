class Vehicle {
    brand;
    model;
    year;
    color;
    price;
    constructor(brand, model, year, color, price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
    }
    details() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: ${this.price}`);
    }  
}
const car1 = new Vehicle("Toyota", "Corolla", 2018, "White", "20L");
car1.details();
const car2 = new Vehicle("Honda", "City", 2019, "Black", "18L");
car2.details();
const car3 = new Vehicle("Maruti", "Swift", 2020, "Red", "10L");
car3.details();
const car4 = new Vehicle("Hyundai", "i20", 2021, "Blue", "15L");
car4.details();
const car5 = new Vehicle("Ford", "EcoSport", 2022, "Grey", "25L");
car5.details();


console.Zlog("------------------------------------------------------------------");

class College{
    name;
    location;
    courses;
    city;
    established;
    constructor(name, location, courses, city, established) {
        this.name = name;
        this.location = location;
        this.courses = courses;
        this.city = city;
        this.established = established;
    }
    display() {
        console.log(`Name: ${this.name}, Location: ${this.location}, Courses: ${this.courses}, City: ${this.city}, Established: ${this.established}`);
    }
}
const college1 = new College("MIT", "Pune", "Engineering", "Pune", 1980);
college1.display();
const college2 = new College("IIT", "Mumbai", "Engineering", "Mumbai", 1950);
college2.display();
const college3 = new College("NIT", "Delhi", "Engineering", "Delhi", 1970);
college3.display();
const college4 = new College("AIIMS", "Delhi", "Medical", "Delhi", 1960);
college4.display();
const college5 = new College("IIM", "Ahmedabad", "Management", "Ahmedabad", 1965);
college5.display();
