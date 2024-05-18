"use strict";
// Storing three different animals having common characteristic in a list
let animals = ["Dog", "Cat", "Rabbit"];
console.log("Animal names with common characteristics:\n");
// use a for loop to print out the name of each animal.
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Modify to print a statement about each animal, such as A dog would make a great pet.
// Add a line at the end stating what these animals have in common, such as Any of these animals would make a great pet!
for (let i = 0; i < animals.length; i++) {
    console.log(`\nA ${animals[i]} would make a great pet`);
}
console.log("\nAny of these animals would make a great pet");
