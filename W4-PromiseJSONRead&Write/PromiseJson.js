const config = require("../../config.js"); 
const path = require("path");
const fs = require("fs"); //File System  
let fileName = path.join(config.PROJECT_DIR, path.normalize('00.Data/Product.json')); //uit te lezen json

//Promise Reader
fs.readFilePromesse = (filename) => {
    return new Promise((resolve, reject)=> {
        fs.readFile(filename, 'utf8',(err, data) => {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
};

//Promise Writer
fs.writeFilePromesse = (filename,data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, (err, result) => {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
};

//EXECUTE!
fs.readFilePromesse(fileName)
    .then(
    (filedata) => {
        console.log(filedata);

        filedata = filedata.substring(0); 
        return JSON.parse((filedata))
    },
        (err) => console.log(err)
    )
    .then(
    (fileJSON) => {
        fileJSON.cost = (
            (Number(fileJSON.cost.substring(2).replace(",", "").replace(".", ""))/ 100)* 0.9).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }); //omzetten
        fileJSON.PriceChangedAt = new Date().toLocaleString();
        return fileJSON;
        (err) => console.log(err)
    })
    .then(fileJSON => fs.writeFilePromesse(
        fileName,JSON.stringify(fileJSON)
         ).then(
        () => console.log('Success\n', JSON.stringify(fileJSON)),
        (err) => console.log('Error:', err)
        )
)


