const {sumRequestHandler} = require('./sum'); 

const requestHandler = (req, res) => {
    console.log(req.url, req.method);
    if (req.url === '/'){
        res.setHeader('Content-type', "text/html");
        res.write("<html>");
        res.write("<head><title>Home</title></head>");
        res.write("<body>")
        res.write("<h1>welcome to home page.</h1>");
        res.write("<a href='/calculator'>Go to calculator-></a></li>");
        res.write("</body>");
        res.write("</html>")
        return res.end();
    } else if (req.url === '/calculator'){
        res.setHeader('Content-type', "text/html");
        res.write("<html>");
        res.write("<head><title>Home</title></head>");
        res.write("<body><h1>This is calculator page</h1>");
        res.write("<form action='/calculate-result' method='POST'>");
        res.write('<input type="text" name="first" placeholder="Enter first number">');
        res.write('<input type="text" name="second" placeholder="Enter second number">');
        res.write('<input type="submit" value="Sum">');
        res.write("</form>")
        res.write("</body>");
        res.write("</html>")
        return res.end();
    } else if (req.url.toLowerCase() == "/calculate-result" && req.method === "POST"){
        return sumRequestHandler(req, res);
    }
}

exports.requestHandler = requestHandler;