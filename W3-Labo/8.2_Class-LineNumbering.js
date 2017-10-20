"use strict";
let fs = require('fs');  

class LineNumbering {

    constructor(fileName) {
        this.fileName = fileName;
    }

    Hello() {
        console.log("Hello");
    }

    readTextAsync(cb) {
        fs.readFile(this.fileName, (err, data) => {
            if (err) throw err;
            cb(null,data.toString('utf8'));
        });
    }

    getNumberedText(cb) {
           let results = [];

        this.readTextAsync(function (err, text) {
               var lines = text.split('\n');
            lines.forEach(function (line, index) {
                results[index] = ` lijn ${index}: ${line} `;
            });
            return cb(null, results);
        });
    }
}
module.exports = LineNumbering;
