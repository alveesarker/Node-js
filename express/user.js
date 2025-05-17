const fs = require("fs");

const userRequestHandler = (req, res) => {
    console.log(req.url, req.method);

    if (req.url === "/") {
        res.setHeader('Content-type', "text/html");
        res.write("<html>");
        res.write("<head><title>Home</title></head>");
        res.write("<body><h1>This is home page</h1>");
        res.write("</body>");
        res.write("<form action='/create-user' method='POST'>");
        res.write('<input type="text" name="username" placeholder="Enter your name"><br>')
        res.write('<br><label for="male">Male</label>')
        res.write('<input type="radio" id="male" name="gender" value="male"')
        res.write('<br><label for="female">Female</label>');
        res.write('<input type="radio" id="female" name="gender" value="female">');
        res.write(' <br><input type="submit" value="Submit">');
        res.write("</form>")
        res.write("</html>")
        return res.end();
    } else if (req.url === "/products") {
        res.setHeader('Content-type', "text/html");
        res.write("<html>");
        res.write("<head><title>Products</title></head>");
        res.write("<body><h1>This is products page</h1></body>");
        res.write("</html>")
        return res.end();
    } else if (req.url.toLowerCase() === "/create-user" && req.method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const params = new URLSearchParams(parsedBody);
            const bodyObj = Object.fromEntries(params);
            fs.writeFile('user.txt', JSON.stringify(bodyObj), (err) => {
                console.log("data written successfully.")
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    else {
        res.setHeader('Content-type', "text/html");
        res.write("<html>");
        res.write("<head><title>Alvee sarker</title></head>");
        res.write("<body><h1>Welcome to my website</h1></body>");
        res.write("</html>")
        return res.end();
    }
}

exports.userRequestHandler = userRequestHandler;