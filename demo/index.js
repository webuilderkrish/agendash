const agenda = require("../lib/index");

agenda({ port: 8080 })
    .then(() => console.log("server started!"))
    .catch((error) => console.log(error.stack));