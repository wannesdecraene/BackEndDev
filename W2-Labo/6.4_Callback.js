//Door elke callbackfuncties te benoemen wordt het geheel overzichtelijker.
//fsreader

const config = require("../config.js");
const path = require("path");
const fileSystem = require("fs");

let fileName = '../' + __dirname + '/Data/MyTextFile.txt';

fileName = path.join(config.PROJECT_DIR, path.normalize('Data/MyTextFile.txt')); //path

//callback
fileSystem.access(fileName, cbAccess);

function cbAccess(err) {
    if (err === null) {
        fileSystem.stat(fileName, cbStat);
    }
}

const cbStat = (error, stats) => {
    if (error) { throw error; }
    if (stats.isFile()) {
        fileSystem.readFile(fileName, null, cbReadFile);
    }
};

const cbReadFile = (error, data) => {
    if (error) { throw error; }
    console.log(data.toString('utf-8'));
};
