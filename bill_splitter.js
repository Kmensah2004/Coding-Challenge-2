let billAmount = 100.0
let tip = billAmount >= 50 && billAmount <= 300 ? (billAmount * 0.15) : (billAmount * 0.20);

let totalAmount = billAmount + tip;
console.log(`The bill was ${billAmount}, the tip was ${tip}, and the total value ${totalAmount}`);

function calculateTip(billAmount){
 let tip = billAmount >= 50 && billAmount <= 300 ? (billAmount * 0.15) : (billAmount * 0.20);
 return tip;
}
let testBill = 100;
let testTip = calculateTip(testBill);
console.log(`For a bill of ${testBill}, the tip is ${testTip}`);
let bills=[275,40,430,125,555,44];
let tips = bills.map(bills => calculateTip(bills));
let totals = tips.map((bills,index) => bills + tips[index]);
console.log(totals);