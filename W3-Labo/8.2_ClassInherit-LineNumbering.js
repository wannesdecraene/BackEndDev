var colors = require('colors/safe');  //library "colors"
var LineNumbering = require("./8.2-Class-LineNumbering");


class LineNumberingColored extends LineNumbering {

    constructor(fileName, uppercase = false , color='green') {
        super(fileName); 
        this._uppercase = uppercase;
        this._color = color;
        this.creationDate = new Date();
    }


    get uppercase() { return this._uppercase; }
    set uppercase(value) { this._uppercase = value; }

    get color() { return this._color; }
    set color(value) { this._color = value; }

    //overriding
    getNumberedText(cb) {
        let results = [];
        super.getNumberedText((err, text) => {
            if (this.uppercase === true) {
                text.forEach((line, index) => {
                    text[index] = line.toUpperCase();

                    var info = colors[this.color];  
                    text[index] = info(line);
                });
            }
            cb(null, text);
        });

    }

}
module.exports = LineNumberingColored;  