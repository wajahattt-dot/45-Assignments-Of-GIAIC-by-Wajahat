/* Question 16: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a
message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.
*/


let guestlist: string [] = ["Wajahat" , "Tashif" , "Putin" , "Vladmir" , "Asharib" , "Nabeel"]
console.log (`Table won't arrived in time that's why I can invite only two people for dinner\n`);

let guest1 = guestlist.pop();
console.log (`Sorry Mr ${guest1} you are not invited!`);

let guest2 = guestlist.pop();
console.log (`Sorry Mr ${guest2} you are not invited!`);

let guest3 = guestlist.pop();
console.log (`Sorry Mr ${guest3} you are not invited!`);

let guest4 = guestlist.pop();
console.log(`Sorry Mr ${guest4} you are not invited!`);

for(let i=0; i < guestlist.length; i++)(
  console.log (`Mr. ${guestlist[i]} you are still invited`)
)

guestlist.pop()
guestlist.pop()
console.log (guestlist);