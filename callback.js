// callback functions
let Callback1 = function Callback1(name, age) {
    console.log(`Callback 1 : Name is ${name}, and age is ${age}`);    
}

let Callback2 = function Callback2(name, age) {
    console.log(`Callback 2 : Age is ${age}, Name is ${name}`);    
}

function DoWork(name, age, myFunctionRef) {
    name = 'Mr. ' + name;
    age++;
    myFunctionRef(name, age); // calls Callback1
}

// DoWork('Scott', 20, Callback1); // pass reference of Callback1 to myFunctionRef
DoWork('Scott', 20, Callback2); // pass reference of Callback2 to myFunctionRef