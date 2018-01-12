cp.stdout.on("data", function (data) {
    console.log(`STDOUT: ${data.toString()}`);
})