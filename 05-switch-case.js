function weekday(daynum) {
    switch (daynum) {
        case 1:
            console.log(`${daynum} - Monday`);
            break;
        case 2:
            console.log(`${daynum} - Tuesday`);
            break;
        case 3:
            console.log(`${daynum} - Wednesday`);
            break;
        case 4:
            console.log(`${daynum} - Thursday`);
            break;
        case 5:
            console.log(`${daynum} - Friday`);
            break;
        case 6:
            console.log(`${daynum} - Saturday`);
            break;
        case 7:
            console.log(`${daynum} - Sunday`);
            break;
        default:
            console.log(`Invalid Data: ${daynum}`);
            
            break;
    }
}   
weekday(1);
weekday(9);