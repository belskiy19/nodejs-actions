const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello, world!");
});

app.get("/sum", (req, res) => {
	const { a, b } = req.query;
	if (a && b) {
		const sum = parseInt(a) + parseInt(b);
		return res.json({ sum });
	}
	res.status(400).json({ error: "Please provide both a and b parameters" });
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
