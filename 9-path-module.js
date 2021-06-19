const path = require("path");

console.log(path.sep); // platform-specific delimiter (/)

// The result of join will be normalized so, for example, extra trailing
// and leading slashes will be ignored
const filePath = path.join("test-one", "test-two", "test.txt"); // a sequence of path segments
const anotherPath = path.join("test-one/", "//test-two", "///test.txt");
console.log(filePath === anotherPath); // true

const base = path.basename(filePath); // last portion of a path
console.log(base); // test.txt

const absolute = path.resolve("test-one", "test-two", "test.txt");
console.log(absolute);
