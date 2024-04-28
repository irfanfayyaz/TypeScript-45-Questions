// Storing guest names in array
let guestList: string[] = ["Adnan", "Rehan", "Zeeshan", "Furqan"];

// Replacing the name of guest who can't join with new guest
let notComing: string = "Adnan";
let newGuest: string = "Farooq";
guestList[0] = newGuest;

// Printing the invitation message for new guest list
// for(let i = 0; i < guestList.length; i++) {
//     console.log(`Dear Mr. ${guestList[i]}, \n\nYou are cordially invited to a dinner party tomorrow.\n\nRegards,\nIrfan Fayyaz\n`);
// };
// Printing a message about not coming guest
console.log(`Mr. ${notComing}, is not coming for that dinner party`);

// Adding a new guest to the beginning of array.
guestList.unshift("Waseem");
// Adding a new guest in the middle of array
guestList.splice(guestList.length/2, 2, "Atif");
// Adding a guest at the end of array
guestList.push("Saleem");

// Printing the invitation message to modified list of guests
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear Mr. ${guestList[i]}, \nyou are cordially invited to a dinner party tomorrow.\nRegards,\nIrfan Fayyaz\n`);
};
console.log("As we got a bigger dinner table, so we invited more guests");
