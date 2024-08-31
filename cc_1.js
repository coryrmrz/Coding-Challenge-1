// Task 1: Variable and Data Types

let customerName = "Kimberly Ramirez";
const customerID = 26;
var isPremiumMember = false;

console.log(customerName, typeof(customerName));
console.log(customerID, typeof(customerID));
console.log(isPremiumMember, typeof(isPremiumMember));

//Task 2: Compound Data Types

let products = ["soap", "sponge", "brush"];
const productDetails = {
    inStock: 100,
    price: 6.00,
    name: products,
}
console.log(products, productDetails);

// Task 3: Assignment Operators

let accountBalance = 3672.28;
console.log("Initial Balance:", accountBalance);
accountBalance += 38.00;
console.log("Updated Balance:", accountBalance);
accountBalance -= 25.00
console.log("Updated Balance:", accountBalance);
accountBalance *= 5
console.log("Updated Balance:", accountBalance);
accountBalance /= 2
console.log("Updated Balance:", accountBalance);
accountBalance %= 1
console.log("Updated Balance:", accountBalance);

// Task 4: Comparison Operators

let employeeScore1 = 28637;
let employeeScore2 = 78463;
console.log(employeeScore1 > employeeScore2);
console.log(employeeScore1 < employeeScore2);
console.log(employeeScore1 >= employeeScore2);
console.log(employeeScore1 <= employeeScore2);
console.log(employeeScore1 === employeeScore2);
console.log(employeeScore1 !== employeeScore2);
