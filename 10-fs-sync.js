const {readFileSync, writeFileSync} = require("fs"); // Two flavors: synchronous and asynchronous

console.log("start");

const first = readFileSync("./test-one/first.txt", "utf8");
const second = readFileSync("./test-one/second.txt", "utf8");

// If file exists, it will overwrite with value, else it will create a new file and write the value.
writeFileSync(
	'./test-one/result-sync.txt',
	`first.txt reads: ${first} / second.txt reads: ${second}\n`,
	{ flag: "a" } // Open file for appending. The file is created if it does not exist.
);

console.log("done");
console.log("other stuff");

// start
// done
// other stuff
