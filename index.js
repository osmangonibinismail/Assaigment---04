// calculateMoney
function calculateMoney(ticketSale) {
    console.log(ticketSale);
    if (ticketSale < 0 || typeof ticketSale !== 'number') {
        return 'Invalid Ticket Quantity';
    }
    const ticketPrice = 120 
    const guardSalary =
    const lunchFee = 
    const stafs = 
    const totalLunchFee = lunchFee * stafs;
    const totalRevenue = ticketPrice * ticketSale;
    const totalSalary = guardSalary + totalLunchFee;

    const result = totalRevenue - totalSalary;
    return result;
   
}
// const ticketQuantity = 
// const result = calculateMoney(ticketQuantity);
// console.log(result);

// checkName
function checkName(name) {
    // console.log(name);
    if (typeof name !== 'string'){
        return 'invalid';
    }

    const character = ['A', 'y', 'i', 'e', 'o', 'y', 'w'];

    const lowercaseName = name.toLowerCase();
    const upercaseName = name.toUpperCase();

    const lastCharacterLowerCase = lowercaseName.substr()
    const lastCharacterUpperCase = upercaseName.

    if(character.includes(lastCharacterLowerCase) || character.includes(lastCharacterUpperCase)){
        return 'Good Name';
    }
    return 'Bad Name';
}
// const input = 'RAFEE' ;
// const result = checkName(input);
// console.log(result);
// console.log(typeof(result));

// deleteInvalids
function deleteInvalids(array) {
    // console.log(array);
    if(!Array.isArray(array)){
        return 'Invalid input: Input must be an Array.'
    }

    let numbers = [];
    for (const arr of array) {
        if(typeof arr === 'number' && !isNaN(arr)){
            numbers.push(arr);
        }
    }
    return numbers;
}
// const input = [null, undefined, NaN, 1 , 12, [1, 2], { ob: "lala" }] ;
// const result = deleteInvalids(input);
// console.log(result);

// password
function password(obj) {
    const{name, birthYear, siteName} = obj;

    if(typeof birthYear !== 'number' || Object.keys(obj).length !== 3 || typeof name !== 'string' || typeof siteName !== 'string'){
        return 'invalid';
    }
    const firstProperty = name.trim();
    const secondProperty = birthYear.toString().trim();
    const thirdProperty = siteName.trim().charAt(0).toUpperCase() + siteName.slice(1).toLowerCase();
    // return secondProperty.length;
    if(secondProperty.length !== 4){
        return 'invalid';
    }
    
    return '${thirdProperty}#${firstProperty}@${secondProperty}';
}
