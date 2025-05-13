const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url.toLowerCase()=== "/home"){
    res.write('<h1>Welcome to home page</h1>');
    return res.end();
  } else if (req.url.toLowerCase() === "/men"){
    res.write('<h1>Welcome to men page</h1>');
    return res.end();
  } else if (req.url.toLowerCase() === "/women"){
    res.write('<h1>Welcome to woment page</h1>');
    return res.end();
  } else if (req.url.toLowerCase() === "/kids"){
    res.write('<h1>Welcome to kids page</h1>');
    return res.end();
  } else if (req.url.toLowerCase() === "/cart"){
    res.write('<h1>Welcome to cart page</h1>');
    return res.end();
  }
  res.write(`<!DOCTYPE html>
             <html lang="en">
             <head>
                 <title>Home</title>
             </head>
             <body>
                 <head>
                     <nav>
                         <ul>
                             <li><a href="home">Home</a></li>
                             <li><a href="men">Men</a></li>
                             <li><a href="women">Women</a></li>
                             <li><a href="kids">Kids</a></li>
                             <li><a href="cart">Cart</a></li>
                         </ul>
                     </nav>
                 </head>
             </body>
             </html>`);

  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running on the address http://localhost:${PORT}`);
});
