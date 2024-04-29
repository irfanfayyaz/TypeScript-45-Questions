"use strict";
// Storing guest names in array
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
let guestList = ["Zeeshan", "Rehan", "Khalid"];
exports.guestList = guestList;
// Printing invitation message to each guest
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear Mr. ${guestList[i]}, \n\nYou are cordially invited to a dinner party tomorow.\n\nRegards, \nIrfan Fayyaz`);
}
