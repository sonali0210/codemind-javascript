const employee_info = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev","DBA"],
    "age": 23,
    "doj":"11-12-2019",
    "married":false,
    "address": {
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred_by": "E0012"
}`;

console.log(`Initial:`);
console.log(employee_info);

console.log("---------------------------------------");

console.log("Json to Object: ");

const employee_infoObj = JSON.parse(employee_info);
console.log(employee_infoObj);

console.log("---------------------------------------");
console.log("Log role 'DEV'");

const employee_role = employee_infoObj.role[0];
console.log(employee_role);

console.log("---------------------------------------");
console.log("Log Last Name");
const name_array = employee_infoObj.name.split(" ");
console.log(name_array);
const last_name = name_array[1];
console.log(last_name);

console.log("-----------------------------------------");
console.log("Log Joining Year");
const doj = employee_infoObj.doj.split("-");
console.log(doj);
const joining_year = doj[2];
console.log(joining_year);

