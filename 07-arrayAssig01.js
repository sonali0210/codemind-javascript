const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Initial array`);
console.log(fruits_seasonal);
console.log("");
console.log("=========================================");

console.log(`Step 1:  First and Last Element `);

console.log(`First element: ${fruits_seasonal[0]}`);
console.log(`Last element: ${fruits_seasonal[fruits_seasonal.length-1]}`);
console.log("");
console.log("=========================================");

console.log(`Step 2: Add Element before Banana `);
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);
console.log("");
console.log("=========================================");

console.log(`Step 3: Remove  Element Mango `);
fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);
console.log("");
console.log("=========================================");

console.log(`Step 4: Add Element Pineapple at last position `);
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);
console.log("");
console.log("=========================================");

console.log(`Step 5: Insert Element Dragon Fruit before Water Melon `);
fruits_seasonal.splice(4,0,"Dragon Fruit");
console.log(fruits_seasonal);
console.log("");
console.log("=========================================");

console.log(`Step 6: Replace  Orange with Kiwi `);
fruits_seasonal[2] = "Kiwi";
console.log(fruits_seasonal);
console.log("");
console.log("=========================================");

console.log(`Step 7: Log elements from index 1 to 4 `);
console.log(fruits_seasonal.slice(1,5));
console.log("");
console.log("=========================================");

console.log(`Step 8: Log last 3 elements `);
console.log(fruits_seasonal.slice(fruits_seasonal.length-3));
