var userAgent = "Chan!";
var srv = require("http").Server(function () {}),
    io = require("socket.io")(srv),
    csock; // current client

var PORT = 4444;

function setUserAgent(sock, userAgent) {
    console.log("Setting User-Agent to '" + userAgent + "'");
    sock.emit("user-agent", userAgent);
}

io.on("connection", function (sock) {
    csock = sock;
    setUserAgent(csock, userAgent);
    sock.on("disconnect", function () {
        console.log("Client disconnected.");
    });
});

console.log("Enter user-agent string + <Enter>. It will be set in the extension.");
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", function (text) {
    userAgent = text.trim();
    setUserAgent(csock, userAgent);
});

srv.listen(PORT);

