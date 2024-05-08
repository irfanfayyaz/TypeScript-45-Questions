//  Creating an array of users and implementing for loop with different messages upon login

let usersNames: string[] = ['Salman', 'Zeeshan', 'Arham', 'Admin', 'Kashif'];

for(let user of usersNames)
    if (user === 'Admin'){
        console.log("Hello admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello ${user}, thank you for logging in again.`)
    }
