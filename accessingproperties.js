// accessing properties from objects in JS
let customer = {
    customerName: 'Scott',
    email: 'scott@test.com',
    1: 'hello'
};

console.log(customer.customerName); // dot notation
console.log(customer['customerName']); // bracket notation
console.log(customer["customerName"]);
console.log(customer[`customerName`]);

customer.email = 'scott@example.com'; // dot notation
console.log(customer["email"]); // brackets notation
console.log(customer[1]); // converted as string
console.log(customer);

