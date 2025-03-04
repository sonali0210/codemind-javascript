function add(n1,n2,n3){
    console.log(n1+n2+n3);
    
}
add(10,5,20);
add(90);


console.log(`---- default param -------`);

function addd(n1,n2=1,n3=2){
    console.log(n1+n2+n3);
    
}
addd(10,5,20);
addd(90);