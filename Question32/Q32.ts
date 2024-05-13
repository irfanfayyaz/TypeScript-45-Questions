// Make a list of five or more usernames called current_users.
let current_users: string[] = ["adnan", "amir", "nasrullah", "noman", "waqas"];

// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users: string[] = ["adnan", "atif", "NOMAN"];

// Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
new_users.forEach((new_users) => {
    if (current_users.some(
        (current_users) => current_users.toLowerCase() === new_users.toLowerCase()
    )
){
    console.log(`${new_users} will need to enter a new username.`)
}
else {
    console.log(`${new_users} is available`)
}
})