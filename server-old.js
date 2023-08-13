const http = require("http");
const data = require("./data/mockUserData");

const serverCallback = (req, res) => {
  console.log(req.url);
  res.writeHead(200, { "Content-Type": "application/jsoln" });
  res.write(JSON.stringify(data));
  res.end();
};

const server = http.createServer(serverCallback);

server.listen(3500);
