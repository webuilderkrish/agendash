const fs = require('fs');
const path = require('path');

module.exports = function requestHandler(request, response) {
    const filePath = path.join(__dirname, 'public/index.html');
    const stat = fs.statSync(filePath);
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': stat.size
    });
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(response);
}