var _http = require("http");

_http.createServer(function (req, res) {
    "use strict";
    res.end("Hello world");
}).listen(process.env.PORT || 5000);

console.log("BINDING TO THE PORT NOW");

