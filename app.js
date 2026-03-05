const express = require("express");

const app = express();
const PORT = 3000;

// home route
app.get("/", (req, res) => {
    res.send("Hello World from Express!");
});

// start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
