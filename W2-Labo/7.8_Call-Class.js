//loader met promises oproepen

let Loader = require('./07.8_Class-Loader'),
    users = [],
    ids = ["P1", "P2", "P3", "P4", "ERROR", "P6", "P7", "P8", "P9"];

const loader = new Loader(users, ids);

console.time("laadtijd Promise");

loader.loadArray()
    .then((result) => {
        console.log("\ntarget array:\n", result);
        console.timeEnd("laadtijd Promise");
        console.info("created by", loader.author);
    },
    (err) => {
        console.log("ERROR: ", err);
        return (null);
    }
    );

setTimeout(function () { process.exit(); }, 25000)