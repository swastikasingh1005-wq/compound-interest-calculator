
let principal = 10000;
let rate = 5;
let n = 1;
let time = 3;


let amount = principal * Math.pow(
    (1 + rate / (100 * n)),
    (n * time)
);


let compoundInterest = amount - principal;

console.log("Principal Amount: ₹" + principal);
console.log("Rate of Interest: " + rate + "%");
console.log("Time Period: " + time + " years");

console.log("Total Amount: ₹" + amount.toFixed(2));
console.log("Compound Interest: ₹" + compoundInterest.toFixed(2));


document.getElementById("amount").innerText =
    "Total Amount: ₹" + amount.toFixed(2);

document.getElementById("interest").innerText =
    "Compound Interest: ₹" + compoundInterest.toFixed(2);