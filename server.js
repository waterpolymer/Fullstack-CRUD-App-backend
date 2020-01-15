const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res, next) => {
	res.status(202).send("Success!");
});

app.use((req, res) => {
	res.status(404).send("Not Found");
});

app.listen(PORT, () => {
	console.log(`Server running on Port ${PORT}`);
});
