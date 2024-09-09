// 1. Calculate the Tip 
let bill = 275;

// Ternary operator to determine the tip amount based on the bill size
// 2. Output Details
let tip = bill >= 50 && bill <= 300 ? bill * 0.20 : bill < 50 ? bill * 0.15 : bill * 0.10;
console.log(`The bill was $${bill}, the tip was $${tip.toFixed(2)}, and the total value is $${(bill + tip).toFixed(2)}`);

// 3.Create a Function 
function calculateTip(bill){ 
    return bill >= 50 && bill <= 300 ? bill * 0.20 : bill < 50 ? bill * 0.15 : bill * 0.10;
}

// Test this function with a bill value of $100
let testBill = 100;
let testTip = calculateTip(testBill);
console.log(`For a bill of $${testBill}, the tip is $${testTip.toFixed(2)}`);

// 4. Utilize Arrays 
const bills1 = [275, 40, 430];
const bills2 = [125. 555, 44];

// First data set
const tips1 = bills1.map(calculateTip);
const totals1 = bills1.map((bill, index) => bill + tips1[index]);
console.log("Data Set 1:");
bills1.forEach((bill, index) => {
    console.log(`The bill was $${bill}, the tip was $${tips1[index].toFixed(2)},and the total value is $${totals1[index].toFixed(2)}`);
});

//Second data set 
const tips2 = bills2.map(calculateTip);
const totals2 = bills2.map((bill, index) => bill + tips2[index]);
console.log("Data Set 2:");
bills1.forEach((bill, index) => {
    console.log(`The bill was $${bill}, the tip was $${tips2[index].toFixed(2)},and the total value is $${totals2[index].toFixed(2)}`);
});
