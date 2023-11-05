const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  //console.log("Request for " + req.url + " by method " + req.method);

  if (req.method == "GET") {
    var fileUrl;
    if (req.url == "/") {
      fileUrl = "./index.html";
    } else {
      fileUrl = req.url;
    }

    var filePath = path.resolve("./data/case4/" + fileUrl);
    const fileExt = path.extname(filePath);
    //console.log(`Filepath : ${filePath}`);
    if (fileExt == ".html") {
      fs.exists(filePath, (exists) => {
        if (!exists) {
          filePath = path.resolve("./404.html");
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html");
          fs.createReadStream(filePath).pipe(res);
          return;
        }
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.createReadStream(filePath).pipe(res);
      });
    } else if (fileExt == ".css") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/css");
      fs.createReadStream(filePath).pipe(res);
    } else if (fileExt == ".ico") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "image/vnd.microsoft.icon");
      fs.createReadStream(filePath).pipe(res);
    } else if (fileExt == ".jpg") {
      if (fs.existsSync(filePath)) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "image/jpeg");
        fs.createReadStream(filePath).pipe(res);
      }else{
        res.end();
      }
    } else {
      filePath = path.resolve("./data/case4/404.html");
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      fs.createReadStream(filePath).pipe(res);
    }
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
