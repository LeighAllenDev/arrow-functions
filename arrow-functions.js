/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a,b) {
    CodeBlock
    return a + b;
}
let sum = addTwoNumbers(3,5);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers3 = (a,b) => {
    // CodeBlock
    return a+b;
}

let summ = addTwoNumbers3(6,17);
console.log(summ)

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a,b) => a + b;
let sum2 = addTwoNumbers2(15,27);
console.log(sum2);


// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Hello there world Hi Hey good day");

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        Multiple lines here, up and down see!!
    </p>`
)

console.log(returnMultipleLines());
