// More Conditional Tests: True and False:

let topStudent: string = "Saleem";
let age: number = 18;
let studentList = ["Kamran", "Saleem", "Zeeshan", "Noman"];

// • Tests for equality and inequality with strings
console.log("Is Saleem = top student? I predict True.");
console.log(topStudent == "Saleem"); //True
console.log("Is Saleem != top student? I predict False.");
console.log(topStudent != "Saleem"); //False

// • Tests using the lower case function
console.log("Is topStudent string not a lowerCase? I predict True");
console.log(topStudent.toLowerCase() != "Saleem"); //True
console.log("Is topStudent string a lowerCase? I predict False");
console.log(topStudent.toLowerCase() === "Saleem"); //False

// Numerical tests involving equality and inequality:
console.log("Is age of the top student is equal to 18? I predict True.");
console.log(age === 18); //True
console.log("Is age of the top student is not equal to 18? I predict false.")
console.log(age !== 18); //False
// Numerical tests involving greater than and less than:
console.log("Is age of the top student is greater than 16? I predict True");
console.log(age > 16); //True
console.log("Is age of the top student is less than 16? I predict False");
console.log(age < 16); //False
// • Numerical tests involving greater than or equal to, and less than or equal to:
console.log("Is age of the top student is greater than or equal to 18? I predict True");
console.log(age >= 18); //True
console.log("Is age of the top student is less than or equal to 17? I predict False");
console.log(age < 17); //False

// Tests using "and" and "or" operators
console.log("Is age of the top student is greater than 16 and less than 20? I predict True");
console.log(age > 16 && age < 20); //True
console.log("Is age of the top student is greater than 20 or less than 16? I predict False");
console.log(age > 20 || age < 16); //False

// • Test whether an item is in a array
console.log("Is 'Zeeshan' listed in studentList? I predict True.")
console.log(studentList.includes("Zeeshan")); //True

// • Test whether an item is not in a array
console.log("Is 'Faheem' not listed in studentList? I predict True.")
console.log(!studentList.includes("Faheem")); //True
