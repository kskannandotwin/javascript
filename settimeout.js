// set timout
function SayHello() {
    console.log('Hello');    
}

function SayGoodBye() {
    console.log('Good bye');    
}

SayHello();
setTimeout(SayGoodBye, 5 * 1000); // Invoikes SayGoodBye function after 5 seconds.