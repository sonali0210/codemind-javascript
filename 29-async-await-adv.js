
console.log("----- START -----");

async function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("Sucessfully fetched Data...")
            reject("Failed to fetch Data...");
        },5000);
    })    
}

async function main(){
    try {
        const prom = await fetchData();
        console.log(prom); 
    } catch (error) {
        console.log("------ Inside catch block --------");
        
        console.log(error);
        
    }
    // const prom = fetchData();
    console.log("------ main END ------");
    
}

main();
console.log("----- END -----");


console.log("===== fetch() API =======");
const responseData = await fetch("https://fakestoreapi.com/products");
const products = await responseData.json();
for (const product of products) {
    console.log(`ID: ${product.id}, Title: ${product.title}, Price: ${product.price}, Count: ${product.rating.count}`);
}