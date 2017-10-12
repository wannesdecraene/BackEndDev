//ES6 constructor class

const load = (element) => {
    return new Promise((resolve, reject) => {
        if (element == "ERROR") {
            setTimeout(() => { reject(element + " error"); }, 0);
        }
        setTimeout(() => { resolve(element + " loaded"); }, Math.random() * 1000);
    });
};

class Loader {
    constructor(arrTarget, elements, author = "WDC") {
        //private
        this.arrTarget = arrTarget;
        this.elements = elements;
        this._author = author;
    }

    //public prop
    get author() { return this._author; }
    set author(value) { this._author = value; } 

    //public methods
    loadArray(arrTarget=this.arrTarget, elements=this.elements) {
        let start_time = new Date().getTime();
        return new Promise((resolve, reject) => {
            let index = 0;
            for (let element of elements) {
                console.time(element + " laadtijd");
                load(element)
                    .then(result => {
                        arrTarget.push(element + " na " + (new Date().getTime() - start_time) + "msec.");
                        console.timeEnd(element + " laadtijd");
                        if (++index === elements.length) {
                            resolve(arrTarget);
                        }
                    },
                    error => {
                        ++index;
                        console.timeEnd(element + " laadtijd");
                        arrTarget.push("FOUT :" + element + " na " + (new Date().getTime() - start_time) + "msec.");
                        return;
                    });
            }
        });
    }

}