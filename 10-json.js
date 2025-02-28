let student = {
    firstName: "Jenny",
    lastName: "Gates",
    age: 22,
    college: "Government College Pune",
    address:{
        flat: 1005,
        society: "Horizon",
        street: "SB Road",
        city: "Pune"
    },
    friends:["James","Neha","Bill"]
}

console.log(typeof student);
const studentJsonString = JSON.stringify(student);
console.log(studentJsonString);


console.log("------- Json to Object ---------");
const employeeJson = `
{
    "employee_id": 11,
    "name": "Jenny",
    "isMarried": true,
    "skills": ["Java", "React", "Angular", "JavaScript"],
    "address": {
        "flat": 1005,
        "floor": 10,
        "street": "Wakad",
        "city": "Pune",
        "PIN": 411057
    } 
}`;
console.log(typeof employeeJson);
const employeeObj = JSON.parse(employeeJson);
console.log(typeof employeeObj);
console.log(employeeObj);