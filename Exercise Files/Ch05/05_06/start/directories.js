var fs = require("fs");

fs.readdirSync("./logs").forEach(function (fileName) {
    console.log(fileName);
    fs.unlinkSync("./logs/" + fileName);
});

fs.rmdir("./logs", function (err) {
    if (err) {
        throw err;
    }
    console.log("Logs Directory removed");
})