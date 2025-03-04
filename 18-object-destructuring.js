const student = {
    name: 'John Doe',
    age: 20,
    city: "Pune",
    pin: 411017,
    country: "India",
    "phone number": "1234567890",
    isMarried : true
}

// let city = student.city;

//marks is default value
let{name,age,city,pin,marks = 80}  = student;
console.log(name,age,city,pin);
console.log(marks);
