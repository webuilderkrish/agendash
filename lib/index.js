const http = require("http");
const requestHandler = require("./request-handler");

module.exports = function agendash(options) {
    return new Promise((resolve, reject) => {
        try {
            const server = http.createServer(requestHandler);
            server.listen(options.port, resolve);
        } catch (error) {
            console.log("error occurred while initialising agendash", error.stack);
            reject(error);
        }
    });
}