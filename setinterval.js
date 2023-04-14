// set interval
function callBack() {
    console.log('Hello');    
}

let myInterval = setInterval(callBack, 2 * 1000); // call the callBack after every 2 seconds

function stopInterval() {
    clearInterval(myInterval); // stop setInterval
}

setTimeout(stopInterval, 20 * 1000); // call stopInterval function after 20 seconds