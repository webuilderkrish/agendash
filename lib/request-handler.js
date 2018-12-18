const fs = require("fs");
const path = require("path");

const staticFiles = [
    "/index.html",
    "/runtime.js",
    "/polyfills.js",
    "/styles.js",
    "/scripts.js",
    "/vendor.js",
    "/main.js",
    "/favicon.ico"
];

function apiRoutesHandler(request, response) {
    response.setHeader('Content-Type', 'application/json');
    const filePath = path.join(__dirname, request.url);
    const readStream = fs.createReadStream(filePath);
    return readStream.pipe(response);
}

module.exports = function requestHandler(request, response) {
    let requestedFile = request.url;
    if (requestedFile && requestedFile.indexOf("/api") > -1) {
        return apiRoutesHandler(request, response);
    }
    if (!requestedFile || staticFiles.indexOf(requestedFile) <= -1) {
        requestedFile = "/index.html";
    }
    const filePath = path.join(__dirname, `public${requestedFile}`);
    const stat = fs.statSync(filePath);
    let contentType = "text/html";
    if (requestedFile.indexOf(".js") > -1) {
        contentType = "text/javascript";
    }
    if (requestedFile.indexOf(".ico") > -1) {
        contentType = "image/x-icon";
    }
    response.writeHead(200, {
        "Content-Type": contentType,
        "Content-Length": stat.size
    });
    const readStream = fs.createReadStream(filePath);
    return readStream.pipe(response);
}