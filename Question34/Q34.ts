// Storing these pizza names in a array,
let pizzas: string[] = ["Fajita", "BBQ Chicken", "Pepperoni"];

// use a for loop to print the name of each pizza.

// for(let i = 0; i < pizzas.length; i++){
//     console.log(pizzas[i])
// }

// Modify for loop to print a sentence using name of pizza instead of printing just the name of the pizza.
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (let i = 0; i < pizzas.length; i++) {
  console.log("I like " + pizzas[i] + " pizza.");
}

// Adding a line at the end outside the for loop, such as I really love pizza!
console.log("\nI really love pizza");
