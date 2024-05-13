"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Creating an array of users:
// let users: string[] = ["Shahid", "Suleman", "Zakir", "Shakeel", "Farooque"]
// // if statement for having users and stating that we have enough users:
// if(users.length > 0){
//     console.log("We have enough users")
// }
// else {console.log("We need to find some users!")}
// If the list is empty:
let users = [];
if (users.length > 0) {
    console.log("We have enough users");
}
else {
    console.log("We need to find some users!");
}
