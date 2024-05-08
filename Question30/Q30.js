//  Creating an array of users and implementing for loop with different messagesupon login
var usersNames = ['Salman', 'Zeeshan', 'Arham', 'Admin', 'Kashif'];
for (var _i = 0, usersNames_1 = usersNames; _i < usersNames_1.length; _i++) {
    var user = usersNames_1[_i];
    if (user === 'Admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again."));
    }
}
