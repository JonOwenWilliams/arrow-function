/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers (a, b) {
    // code block
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum)

// Arrow Function With Parameters
const addTwoNumbers1 = (a, b) => {
    // code block
    return a + b;
}

let sum1 = addTwoNumbers1 (7, 2);
console.log(sum1)

// Single Line Arrow Function With Parameters
const addTwoNumber2 = (a, b) => a + b;
let sum2 = addTwoNumber2(6, 4)
console.log(sum2)

// Implicit 

const saySomething = message => console.log(message);
saySomething('Hello There!!!!')

const sayHello = () => console.log('Hello');
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
        This is a Multiline String!
    </p>`
)
console.log(returnMultipleLines())