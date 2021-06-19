const sayHi = (name) => {
	console.log(`Hello there ${name}!`);
}

// No need to export an object with the function,
// we can just export the function
module.exports = sayHi;
