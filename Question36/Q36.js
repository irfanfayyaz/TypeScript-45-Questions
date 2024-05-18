"use strict";
// function make_shirt() that accepts size & the text should be printed on the shirt.
// function should print a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
let sizeofShirt = ["Small", "Medium", "Large"];
let shirt1 = "This shirt is for short and slim people";
let shirt2 = "This shirt is for smart people";
let shirt3 = "This shirt is for healthy and tall people";
function make_shirt() {
    let simpleFunction = `This is a ${sizeofShirt[1]} shirt, and ${shirt2}`;
    return simpleFunction;
}
let response = make_shirt();
console.log(response);
