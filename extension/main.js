var userAgent = "Chan! (default)";

var sock = io("http://localhost:4444");

sock.on("user-agent", function (ua) {
    userAgent = ua;
    console.log("Set new user agent to '" + userAgent + "'");
});

chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        var i = 0;
        for (; i < details.requestHeaders.length; i++) {
            if (details.requestHeaders[i].name == "User-Agent") {
                details.requestHeaders[i].value = userAgent;
            }
        }
        return { requestHeaders: details.requestHeaders };
    },
    { urls: ["<all_urls>"] },
    [ "blocking", "requestHeaders" ]
)
