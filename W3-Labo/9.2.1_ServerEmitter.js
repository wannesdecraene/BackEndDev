receivedData = (status) => {
    console.log('Ontvangen data status: ', status);
}

getData = (status, callback) => {
    callback(status);
}




const events = require("events"),
    emitter = new events.EventEmitter();

emitter.on("Data", (status, msg) => {
    console.log("status:", status, "msg:", msg);
})

emitter.on("error", (status, err) => {
    console.log("status:", status, "msg:", err);
})

getData2 = (status) => {
    if (status === "error") {
        emitter.emit('error', status, "Error")
    } else {
        emitter.emit('Data', status, "data ontvangen")
    }
}

setTimeout(getData2, 1500, 'succes');
setTimeout(getData2, 500, 'error');