const {readFile, writeFile} = require("fs"); // Two flavors: synchronous and asynchronous

console.log("start");

readFile("./test-one/first.txt", "utf8", function(err, data) {
	if (err) {
		throw err;
	}
	const first = data;
	readFile("./test-one/second.txt", "utf8", function(err, data) { // This pattern can lead to callback hell
		if (err) {
			throw err;
		}
		const second = data;
		writeFile(
			"./test-one/result-async.txt",
			`The result of first: ${first} / The result of second: ${second}\n`,
			{ flag: "a" }, // Open file for appending. The file is created if it does not exist.
			function(err) {
				if (err) {
					throw err;
				}
				console.log("done");
			}
		)
	})
});

console.log("other stuff");

// start
// other stuff
// done
