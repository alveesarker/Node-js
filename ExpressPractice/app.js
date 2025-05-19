const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
    console.log("First dummy middleware", req.url, req.method);
    next();
});

app.use((req, res, next) => {
    console.log("Second dummy middleware", req.url, req.method);
    next();
});

// app.use((req, res, next) => {
//     console.log("Third middleware");
//     res.send("<h1>Welcome to my website</h1>");
// })


app.get("/", (req, res, next) => {
    console.log("handling / for get", req.url, req.method);
    res.send("<h1>Welcome to MY website</h1>");
});

app.get("/contact-us", (req, res, next) => {
    console.log("handling /contact us for get", req.url, req.method);
    res.send(`<h1>Give your details</h1>
              <form action="/contact-us" method="POST">
              <input type="text" placeholder="enter Your Name" name="name">
              <input type="text" placeholder="enter Your email" name="email">
              <input type="submit" >
              </form>`);

});


app.post("/contact-us", (req, res, next) => {
    console.log("First handling", req.url, req.method, req.body);
    next()
});

app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
    console.log("handling /contact us for post", req.url, req.method, req.body);
    res.send(`<h1>Thanks for you details</h1>`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}/`);
});