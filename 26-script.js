console.log(`-------- getElementById() DOM API ---------`);

const reactElement = document.getElementById("react");
console.log(reactElement);
console.log(reactElement.innerText)

console.log(`-------- querySelector() DOM API using element name ---------`);
const h2Element = document.querySelector("h2");
console.log(h2Element);
console.log(h2Element.innerText);

console.log(`-------- querySelector() DOM API using element id ---------`);
const javaElement = document.querySelector("#java");
console.log(javaElement);
console.log(javaElement.innerText);

console.log(`-------- querySelector() DOM API using element class ---------`);
const toolsElement = document.querySelectorAll(".tools");
for (const element of toolsElement) {
    console.log(element.innerText);
    
}

console.log(`-------- Updating Element Text ---------`);
const toolsHeading = document.querySelector("#toolsHeading");
toolsHeading.innerText = "Tools and IDE's";
console.log(toolsHeading);


// const instagramPage = document.querySelector("#instagramPage");
// instagramPage.setAttribute("href","https://www.instagram.com/");

console.log(`-------- Changing Style of an Element ---------`);
const socialMediaHeading = document.querySelector("#socialMediaHeading");
socialMediaHeading.style.color = "blue";
socialMediaHeading.style.fontFamily = "Arial";

console.log(`-------- Creating new node ---------`);
const textNode = document.createTextNode("All copyrights reserved");
const paraElement = document.createElement("p");
paraElement.appendChild(textNode);

const footer = document.querySelector("footer");
footer.appendChild(paraElement);

console.log(`-------- Delete node ---------`);
const liDanceElement = document.querySelector("#dance");
const hobbiesElement = document.querySelector("#hobbies");
hobbiesElement.removeChild(liDanceElement);

console.log(`-------- Events ---------`);

const hobbiesHeading = document.querySelector("#hobbiesHeading");
hobbiesHeading.addEventListener("click", ()=> {
    console.log("Hey Buddy....Smile!!");
    alert("Hey Buddy!.....")
    
});


console.log(`-------- Modals ---------`);
const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click",()=>{
    const numValue = prompt("Enter number:",0);
    confirm("Are you sure you entered the correct number?")
    const square = numValue*numValue;
    alert(square);
})

const addition = document.querySelector("#addition");
addition.addEventListener("click", () => {
    const numOne = +document.querySelector("#inputOne").value;
    const numTwo = +document.querySelector("#inputTwo").value;
    alert(numOne + numTwo);
});