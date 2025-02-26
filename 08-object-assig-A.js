let professor = {
    firstName: "Jane",
    age: 45,
    department: 'Computer Science',
    university: 'Tech University',
    gender: 'Female',
    degrees: {
        engineering: "CSC",
        Masters: "Software Engineering",
        phd: "Adv Computing",
        bachelors: "Computer Science",
        diploma: "Data Science"
    },
    certificates:[
        "Hacker Rank Participation",
        "Certificate in IFE course",
        "Certificate in Adv Programming",
    ]
};
console.log(`Initial Object:`);
console.log(professor);
console.log("-------------------------------------------------------------------");
console.log(`Accessing Nested Object:`);
console.log(professor.degrees);
console.log("--------------------------------------------------------------------");
console.log(`Array:`);
console.log(professor.certificates);
console.log("-------------------------------------------------------------------");
professor.totalExperience = "14 years";
console.log(`Add new Property:`);
console.log(`Total Experience: ${professor.totalExperience}`);
console.log("-------------------------------------------------------------------");
professor.age = 48;
console.log(`Update Age Property:`);
console.log(professor);
console.log("--------------------------------------------------------");
professor.certificates.splice(2,0,"Oracle Certified");
console.log(`Add new certificate:`);
console.log(professor.certificates);
console.log("-------------------------------------------------------------------");
let lastElement = professor.certificates[professor.certificates.length-1];
console.log(`Last Element of Array: ${lastElement}`);
console.log("-------------------------------------------------------------------");
// for (const key in professor) {
//         const element = professor[key];
//         console.log(`${key} : ${element}`);
// }

for (let key in professor) {
    if (typeof professor[key] === 'object' && !Array.isArray(professor[key])) {
      console.log(`${key}:`);
      for (let subKey in professor[key]) {
        console.log(`  ${subKey}: ${professor[key][subKey]}`);
      }
    } else {
      console.log(`${key}: ${professor[key]}`);
    }
}