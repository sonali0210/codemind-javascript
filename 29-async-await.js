// async - When we return normal value then 
// it wraps that value inside promise and return it
//  but when we return promise then it returns 
// that promise as it is
// await - 


async function fetchAPI(){
    // let person  = {
    //     firstName: "John",
    //     lastName: "Doe",
    //     age: 25,
    //     city: "Pune",
    // }.
    const fullName = "John Dow"
    return fullName;
}

const obj = fetchAPI();
console.log(obj);
obj.then((success)=>{
    console.log(`Inside Then...`);
    
    console.log(success);
});

obj.catch((failure)=>{
    console.log(`Inside Catch...`);
    console.log(failure);
});


async function  fetchData() {
    const promise = new Promise((success, reject) => {
        success("------ Promise fulfilled -------")
    });
    return promise;

}
fetchData().then((success)=>{
    console.log(success);
    
}).catch((failure)=>{
    console.log(failure);
    
});


