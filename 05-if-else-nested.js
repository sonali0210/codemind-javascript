function dreamJob(isGotPlacement) {
    if (isGotPlacement) {
        console.log("I wil go shopping for clothes");
        var isMNC = true;

        if (isMNC) {
            console.log("I will visit Paris");
        } else {
            console.log("I will visit Manali");
        }
    } else {
        console.log("i will buy ice-cream");  
    }
}
dreamJob(true);
console.log("-------------------");
dreamJob(false);