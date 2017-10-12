//module pattern (private vs public)

const loader = (() => {

    let start;
    start = start ? start : new Date().getTime();

    const loadAsync = (element, cb) => {
        if (element === "ERROR") { cb("ERROR", null); }
        else { setTimeout(() => { cb(null, `${element}  loaded `); }, Math.random() * 1000); }
    };

    const loadArrayAsync = (arrTarget, elements, cb) => {
        let counter = 0;

        for (let element of elements) {
                loadAsync(element, (err, element) => {
                    if (err) {
                        arrTarget[counter++] = err;
                        cb(err, null);
                    } else {
                        arrTarget.push(element + " after " + (new Date().getTime() - startTime) + " msec.");

                        console.log(arrTarget[counter++]);
                        if (counter === elements.length) {
                            cb(null, arrTarget);
                            console.timeEnd("Asynchrone laadtijd");
                        }
                    }
                });
        }
    };

    return {
        loadArrayAsync
    };
})();

module.exports = loader;
