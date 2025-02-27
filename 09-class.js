class student  {
    // Data Members
    name
    college
    marks
    city
    //Constructor
    constructor(name, college, marks, city) {
        this.name = name;
        this.college = college;
        this.marks = marks;
        this.city = city;
    }
    //Member Function or Method
    details() {
        console.log(`Name: ${this.name},College: ${this.college},Marks: ${this.marks},City: ${this.city}`)
    }
}
const std = new student("John", "MIT", "90%", "New York");
std.details();
const std2 = new student("Jane", "Harvard", "95%", "Boston");
std2.details();
