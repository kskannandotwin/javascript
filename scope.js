// scope of variables

// before declaration
console.log("before global variables");
console.log(a); // accessible - hoisted up but undefined when before declare // undefined
// console.log(b); // not accessible -not hoisted up before declare

var a = 10; // global variable
let b = 20; // global variable

// after declaration
console.log("after global variables");
console.log(a); // accessible
console.log(b); // accessible

function myFunction(parameter) {
  // before declaration of c and d
  console.log("before local variables");
  console.log(a); // accessible
  console.log(b); // accessible
  console.log(c); // accessible - hoisted up but undefined when before declare // undefined
  // console.log(d); // not accessible - not hoisted up before declare

  var c = 30; // local variable
  let d = 40; // local variable

  //   after declaration of c and d
  console.log("after local variables");
  console.log(a); // accessible
  console.log(b); // accessible
  console.log(c); // accessible
  console.log(d); // accessible

  if (c == c) {
    // before declaration of e and f
    console.log("before block variables");
    console.log(a); // accessible
    console.log(b); // accessible
    console.log(c); // accessible
    console.log(d); // accessible
    console.log(e); // accessible - hoisted up but undefined when before declare // undefined
    // console.log(f); // not accessible - not hoisted up before declare

    var e = 50; // local variable
    let f = 60; // block level

    // after declaration of e and f
    console.log("after block variables");
    console.log(a); // accessible
    console.log(b); // accessible
    console.log(c); // accessible
    console.log(d); // accessible
    console.log(e); // accessible
    console.log(f); // accessible
  } // end of block

  console.log("after block - within function");
  console.log(a); // accessible
  console.log(b); // accessible
  console.log(c); // accessible
  console.log(d); // accessible
  console.log(e); // accessible
  // console.log(f); // not accessible because of end of block
} // end of function

myFunction();

console.log("after global - outside the function");
console.log(a); // accessible
console.log(b); // accessible
// console.log(c); // not accessible because of end of function
// console.log(d); // not accessible because of end of function
//console.log(e); // not accessible because of end of function


