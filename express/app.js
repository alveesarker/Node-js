//External module
const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
    console.log("Came in first middleware", req.url, req.method);
    // res.send("<p>First Middleware</p>");
    next();
})

app.post("/submit-details", (req, res, next) => {
    console.log("Came in Second middleware", req.url, req.method);
    res.send("<p>This is submit details page</p>");
});

app.use("/", (req, res, next) => {
    console.log("Came in Second middleware", req.url, req.method);
    res.send("<p>Second Middleware</p>");
})


const port = 3000;
app.listen(port, (a) => {
    console.log(`server running on address http://localhost:${port}`);
});