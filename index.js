const http = require("http");
const fs = require("fs");

//create a server object:
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  }

  if (req.url == "/read") {
    fs.readFile("read.txt", (err, data) => {
      if (err) {
        res.write("error: can't read"); //write a error to the client
        res.end(); //end the response
      } else {
        res.write(data); //write a response to the client
        res.end(); //end the response
      }
    });
  }

  if (req.url == "/append") {
    fs.appendFile("append.txt", "new append file", (err) => {
      if (err) {
        res.write("error: append field"); //write a error to the client
        res.end(); //end the response
      } else {
        res.write("new file append"); //write a response to the client
        res.end(); //end the response
      }
    });
  }

  if (req.url == "/delete") {
    fs.unlink("append.txt", (err) => {
      if (err) {
        res.write("error: file field to delete"); //write a error to the client
        res.end(); //end the response
      } else {
        res.write("file delete successful"); //write a response to the client
        res.end(); //end the response
      }
    });
  }

  if (req.url == "/write") {
    fs.readFile("read.txt", (err, data) => {
      if (err) {
        res.write("error: can't read"); //write a response to the client
        res.end(); //end the response
      } else {
        fs.writeFile("write.txt", data, (err) => {
          if (err) {
            res.write("error: field to write"); //write a response to the client
            res.end(); //end the response
          } else {
            res.write("writing is done"); //write a response to the client
            res.end(); //end the response
          }
        });
      }
    });
  }
});

//the server object listens on port 5000
const PORT = 5000;
server.listen(PORT);
console.log("server on");
