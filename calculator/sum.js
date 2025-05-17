const sumRequestHandler = (req, res) => {
    console.log("In sum request Handler", req.url);
    const body = []
    let result = 0;
    req.on('data', chunk => {
        body.push(chunk);
    });

    req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);
        result = parseInt(bodyObj.first) + parseInt(bodyObj.second);
        res.setHeader('Content-type', "text/html");
        res.write("<html>");
        res.write("<head><title>calculate result</title></head>");
        res.write("<body>")
        res.write(`<h1>The result is ${result}</h1>`);
        res.write("</body>");
        res.write("</html>");
        console.log("One")
        return res.end()
    })

    console.log("Two")
}

exports.sumRequestHandler = sumRequestHandler;