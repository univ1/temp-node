const http = require("http");

const server = http.createServer((req, res) => {
	console.log(req.url);

	switch (req.url) {
		case "/":
			res.end("Welcome to my home page");
			break;
		case "/about":
			res.end("I'm the best gamer in the world");
			break;
		case "/soda":
			res.end("I enjoy soda very much.");
			break;
		default:
			res.end(`
				<h1>Oops!</h1>
				<p>We can't seem to find the page you are looking for</p>
				<a href="/">Back home</a>
			`)
	}
});
server.listen(5000);
