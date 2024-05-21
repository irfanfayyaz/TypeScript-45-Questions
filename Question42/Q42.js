"use strict";
// Great Magicians: Start with a copy of your previous program.
// Write a function called make_great() to modifiy array of magicians by adding phrase "the Great" to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
let magiciansList = ["David Blaine", "Criss Angel", "Dynamo", "Lance Burton", "Derren Brown"];
let greatMagician = "The Great";
for (let i = 0; i < magiciansList.length; i++) {
    function make_great() {
        let simpleFunction = `${greatMagician} magician ${magiciansList[i]}`;
        return simpleFunction;
    }
    let response = make_great();
    console.log(response);
}
