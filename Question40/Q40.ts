// Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
function make_album1(artistName: string, albumTitle: string){
    return{artistName, albumTitle}
}
// Use function to make three dictionaries representing different albums.
let album1 = make_album1("Atif Aslam", "Duri")
let album2 = make_album1("Sajjad Ali", "Chief Sahab")
let album3 = make_album1("Ali Azmat", "Junun")

// Print each return value to show that Objects are storing the album information correctly.
console.log(album1);
console.log(album2);
console.log(album3);

// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album.
function make_album2(artistName: string, albumTitle: string, numberofTracks?: number){
    return{artistName, albumTitle, numberofTracks}
}
let album4 = make_album2("Atif Aslam", "Duri", 15)
let album5 = make_album2("Sajjad Ali", "Chief Sahab", 10)
let album6 = make_album2("Ali Azmat", "Junun")
console.log(album4);
console.log(album5);
console.log(album6);
