//ForLus met closures
//event => result
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 50);
}
//let
for ( let i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, 50);
}
//closure
for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(() => {
            console.log(i);
        }, 50);
    })(i);
}