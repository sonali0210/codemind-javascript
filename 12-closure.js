// gives access to outer funcn scope from inner funcSn
var globalVariable = 100;
function outer(){
    let outerVr = 200;
    let inner = function(){
        console.log(`Inside Inner Function`);
        let innerFunVAr = 300;
        console.log(innerFunVAr);
        console.log(outerVr);
        console.log(globalVariable);          
    }
    return inner;
}

var result = outer();
// console.log(result);

result();
