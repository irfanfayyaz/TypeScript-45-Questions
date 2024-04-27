"use strict";
// Storing guest names in array
let guestList = ["Adnan", "Rehan", "Zeeshan", "Furqan"];
// Printing invitation message for each guest
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear Mr. ${guestList[i]}, \n\nYou are cordially invited to a dinner party tomorrow.\n\nRegards,\nIrfan Fayyaz`);
}
;
// Replacing the name of guest who can't join with new guest
let notComing = "Adnan";
let newGuest = "Farooq";
guestList[0] = newGuest;
// Printing the invitation message for new guest list
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear Mr. ${guestList[i]}, \n\nYou are cordially invited to a dinner party tomorrow.\n\nRegards,\nIrfan Fayyaz\n`);
}
;
// Printing a message about not coming guest
console.log(`Mr. ${notComing}, is not coming for that dinner party`);
