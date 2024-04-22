/* Question 40: Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and
an album title, and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album
information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of
tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
*/


function make_album(ArtistName:String , AlbumTitle:String) {
    return {ArtistName, AlbumTitle}
}

let Album1 = make_album(`Juice WRLD` , `All Girls Are The Same`);
let Album2 = make_album(`Travis Scott` , `FIEN`);
let Album3 = make_album(`Krystal Castles` , `Kerosene`);

console.log(Album1);
console.log(Album2);
console.log(Album3);

function make_album2(ArtistName:String , AlbumTitle:String , NumOfTracks?:Number) {
   return {ArtistName, AlbumTitle, NumOfTracks}
}

let Album4 = make_album2(`Juice WRLD` , `All Girls Are The Same` , 20);
let Album5 = make_album2(`Travis Scott` , `FIEN`);
let Album6 = make_album2(`Krystal Castles` , `Kerosene` , 35);

console.log(Album4);
console.log(Album5);
console.log(Album6);