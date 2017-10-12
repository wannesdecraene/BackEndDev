//oproepen module

let loader = require("./07.6_Module-Loader"),
    users = [],
    ids = ["P1", "P2", "P3", "P4", "ERROR", "P6", "P7", "P8", "P9"];

loader.loadArrayAsync(users, ids, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log("\filled array: ", result);
    }
});