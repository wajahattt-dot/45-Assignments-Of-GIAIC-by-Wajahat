/* Question 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are
inviting to dinner.
*/

let guestlist: string[] = [`Wajahat` , `Tashif` , `Andrew` , `Vladmir` , `Putin`]
console.log (`i am inviting ${guestlist.length} people at my dinner which are following\n`);

for(let i=0;i<guestlist.length;i++){
  console.log( `${i+1}. ${guestlist[i]}`); 
}