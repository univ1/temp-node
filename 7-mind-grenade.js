const num1 = 5;
const num2 = 10;

function addValues() {
	console.log(`the sum is : ${num1 + num2}`);
}

// Because this is just an invocation and not an export of a function reference,
// requiring this module will simply execute it.
addValues();
