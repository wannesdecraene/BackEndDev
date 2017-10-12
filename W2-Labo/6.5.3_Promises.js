//gebruiken van promises bij asynchrone loader

let users = [];
let ids = ["P1", "P2", "P3", "P4", "ERROR", "P6", "P7", "P8", "P9"];

//Async loader

const load = (element) => {
    return new Promise((resolve, reject) => {
        if (element == "ERROR") {
              setTimeout(() => { reject("Error: " + element);}, 0);
        }
        setTimeout(() => { resolve(element + " loaded");}, Math.random() * 1000);
    });
};

const loadArray = (arrTarget, elements) => {
    let start_time = new Date().getTime();
    console.time("Promise");
    return new Promise((resolve, reject) => {
        let index = 0;
        for (let element of elements) {
            console.time(element + " laadtijd");
            load(element)
                .then(result => {
                    arrTarget.push(element + " after " + (new Date().getTime() - start_time) + "msec.");
                    console.timeEnd(element + " laadtijd");
                    if (++index === elements.length) {
                        resolve(arrTarget);
                    }
                },
                error => {
                    ++index; 
                    console.timeEnd(element + " laadtijd");
                    arrTarget.push("Error :" + element + " after " + (new Date().getTime() - start_time) + "msec.");
                    return ;
                });           
        }
    });
};

//uitvoer

loadArray(users, usersIds)
    .then((result) => {
        console.log("\ntarget array:\n", result);  
        console.timeEnd("laadtijd");

    },
    (err) => {
        console.log("ERROR: ", err);
        return (null);
    }
    );

setTimeout(() => process.exit(), 25000);