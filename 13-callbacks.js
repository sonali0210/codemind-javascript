// Jenny - Home work preparation
// Home work completion
// Callback to elon 

// Elon - Playing Match
// Elon came back and started copying home work
//  Home work completion


function jenny(callback) {
    console.log(`------- Jenny went home and had snacks -------`);
    console.log(`------- Jenny started homework prep ----------`);
    console.log(`------- After 2 hrs homework completed -------`);
    //Elon callback    
    // console.log(callback);
    callback();
    
}
let elon = function(){
    console.log(`******** Elon went home and had snacks ********`);
    console.log(`******** Elon went to play match **********`);
    console.log(`******** Elon came back and started copying homework **********`);
    console.log(`******** Homework completed **********`);
    
}
jenny(elon);

console.log(`------ setTimeout() -------`);

let show = function(){
    console.log(`== Inside show FE ===`);
}

setTimeout(show, 5000);