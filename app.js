const http = require('http');

const hostname = '44.199.112.112';
const port = 3000;

const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  
  if (req.url == '/') { //check the URL of the current request
        
        // set response content    
        res.write('<html><body><p>This is Home Page.</p></body></html>');
        res.end();

  }else if (req.url == "/admin") {

        // set response content
        res.write('<html><body><p color="red">This is Admin Page.</p></body></html>');
        res.end();

  }else{
                // set Invalid response content
                res.statusCode = 401;
                res.end('Page Not Found');
  }

  console.log(`New request http://${hostname}:${port}`+req.url);
});

server.listen(port, '0.0.0.0', () =>{
  console.log(`Server running at http://${hostname}:${port}/`);
});

