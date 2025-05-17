const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    if(req.url == "/") {
        console.log("This is home page");
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})