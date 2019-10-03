//ex 1 : Cents to Dollars -> function

centsToEuros = (cents) => {
    return cents / 100;
}

const pricesInCents = [2999, 1899, 3789, 4199];
const pricesInDollars = [];
    
for (let i = 0; i < pricesInCents.length; i++) {
    const unitInCents = pricesInCents[i];
    const unitInDollars = centsToEuros(unitInCents);
    pricesInDollars.push(unitInDollars);
    }
        
console.log(pricesInDollars);
    
//ex 2: Valid prices -> filter with for
const isValidPrice = (price) => {
    return price !== 0;
}

const allPrices = [2999, 0, 1899, 0];
const validPrices = [];

for (let i = 0; i < allPrices.length; i ++) {
    const unitPrice = allPrices[i];

    if (isValidPrice(unitPrice)) {
        validPrices.push(unitPrice);
        }
    }
    
console.log(validPrices);


//ex 3: Valid prices -> filter function
