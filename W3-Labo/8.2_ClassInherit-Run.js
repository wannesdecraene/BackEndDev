"use strict";
//vooraf: npm install colors
const path = require("path");
const config = require("../../config")
const LineNumbering = require('./8.2-Class-LineNumbering'); 
const LineNumberingColored = require('./8.2-ClassInherit-LineNumbering'); 


let fileName = path.join(config.PROJECT_DIR, path.normalize('Data/MyTextFile.txt'));

let lineNumbering = new LineNumberingColored (fileName , true ,"yellow");

lineNumbering.getNumberedText(function (err, result) {
   for (let line of result) {
       console.log(line);
    }
});

//prevent close cli
setTimeout(function () {
    process.exit();
}, 60000);
