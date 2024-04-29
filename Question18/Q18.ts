// Creating an array of five places not in alphabetical order
let places: string[] = ["India", "China", "France", "Afghanistan", "England"];
// Printing array as in its original order
console.log(`Original: ` + places);

//  Printing array in alphabetical order without modifying the actual list.
console.log(`Alphabetical copy: ` + [...places].sort());

// Showing that array is still in its original order by printing it.
console.log(`Original: ` + places);

// Printing array in reverse alphabetical order without changing the order of the original list.
console.log(`Reverse Alphabetical copy: `, [...places].sort().reverse());

// Showing that array is still in its original order by printing it.
console.log(`Original Order: ` + places);

// Reverse the order of list.
places.reverse();
// Print the array to show that its order has changed.
console.log(`Changed order: `, places);

// Reverse the order of list again.
places.reverse();
// Print the list to show it’s back to its original order.
console.log(`Original order again: `, places);

// Sort array so it’s stored in alphabetical order.
places.sort();
// Print the array to show that its order has been changed.
console.log(`Alphabetical order: ` , places);

// Sort to change array so it’s stored in reverse alphabetical order.
places.sort().reverse();
// Print the list to show that its order has changed.
console.log(`Reverse Alphabetical order: ` , places);
