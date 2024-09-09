// 1. Calculate the Tip 
let bill = 275;

// Ternary operator to determine the tip amount based on the bill size
let tip = bill >= 50 && bill <= 300 ? bill * 0.20 : bill < 50 ? bill * 0.15 : bill * 0.10;
console.log(`The bill was $${bill}, the tip was $${tip.toFixed(2)}, and the total value is $${(bill + tip).toFixed(2)}`);