const http = require("http");
const fs = require("fs").promises;
const host = "localhost";
const port = 8000;

const requestListenerServer = function (req, res) {
    fs.readFile(__dirname + "/src/index.html").then(contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
    }).catch(err => {
        res.writeHead(500);
        res.end(err);
        return;
    })

}

const server = http.createServer(requestListenerServer);
server.listen(port, host, () => {
    console.log(`The calculator is on http://${host}:${port} bitch`);
});

