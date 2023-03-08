# nodejs-server

How to set nodejs server on ubuntu 20.04

You can watch the youtube video too:
https://www.youtube.com/watch?v=bju1c1CDEZk

<a href="https://www.buymeacoffee.com/scaleupsaas"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=scaleupsaas&button_colour=BD5FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>


## Installation instructions

### 1. Choose one of the options
To **install** or **update** nvm, you should run the [install script][2]. To do that, you may either download and run the script manually, or use the following cURL or Wget command:
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
Or
```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Running either of the above commands downloads a script and runs it. The script clones the nvm repository to `~/.nvm`, and attempts to add the source lines from the snippet below to the correct profile file (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`).

### 2. Copy & Past (each line separately)
<a id="profile_snippet"></a>
```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

### 3. Verify that nvm has been installed

```sh
nvm --version
```

### 4. Install node
```sh
nvm install node # Latest node js server version
```
Or
```sh
nvm install --lts # Latest stable node js server version
```

### 5. Check nodejs installed
```sh
node --version
```

### 6. Check npm installed
```sh
npm -v
```

### 7. View all nodejs server installed
```sh
nvm ls
```

### 8. Choose latest stable node js server version
```sh
nvm use 16.14.0
```

### 9. Create nodejs file
```sh
nano app.js
```

### 10. Copy & Past nodejs server setting to app.js file
```
const http = require('http');

const hostname = '127.0.0.1'; // Your server ip address
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

  console.log(`New request => http://${hostname}:${port}`+req.url);
});

server.listen(port, '0.0.0.0', () =>{
  console.log(`Server running at http://${hostname}:${port}/`);
});

```

### 11. Run nodejs server
```sh
node app.js
```






