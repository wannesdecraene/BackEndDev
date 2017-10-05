/*
* Wannes De Craene
* 3NMCT
*/
"use strict";

// Sync

let users = [];
let ids = [];
let delay = 2000;

const sleep = (time) => {
    var start= new date().getTime();
    while (new Date.getTime()-start < time){
        //sync while
    }
}

const loadSync = (element) => {
    sleep(delay);
    return element + " loaded";
};

const ArraySync = (array, elements) => {
    for (let element of elements){
        array[element] = loadSync(element);
        console.log(array[element]);
    }
};

//ArraySync(users, ids);

// Async

const loadAsync = (element, cb) => {

    if (element === "ERROR") {
        cb("ERROR", null);
    } else {
        setTimeout(function () { cb(null, element + " loaded ") }, 2000)
    }
};

const loadArrayAsync = (arrTarget, elements, cb) => {
    var counter = 0;
    console.time("Asynchroon laden for/of");
    for (let element of elements) {
        loadAsync(element, function (err, element) {
            if (err) {
                arrTarget[counter++] = err;
                cb(err, null);
            } else {
                arrTarget[counter++] = element;
                console.log(arrTarget[counter-1]);
                if (counter === usersIds.length) {
                    cb(null, arrTarget);
                    console.timeEnd("Asynchroon laden for/of");
                }
            }
        });
    }

};

loadArrayAsync(users, usersIds, function (err, result) {
    if (err) { console.log(err) } else {
        console.log("Result: ", result)
    }
})