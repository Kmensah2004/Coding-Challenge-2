let billAmount = 100.0
let tip = billAmount >= 50 && billAmount <= 300 ? (billAmount * 0.15) : (billAmount * 0.20);
let totalAmount = billAmount + tip;
console.log(`The bill was ${billAmount}, the tip was ${tip}, and the total value ${totalAmount}`);