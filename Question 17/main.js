/* Question 16: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a
message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.
*/
var guestlist = ["Wajahat", "Tashif", "Putin", "Vladmir", "Asharib", "Nabeel"];
console.log("Table won't arrived in time that's why I can invite only two people for dinner\n");
var guest1 = guestlist.pop();
console.log("Sorry Mr ".concat(guest1, " you are not invited!"));
var guest2 = guestlist.pop();
console.log("Sorry Mr ".concat(guest2, " you are not invited!"));
var guest3 = guestlist.pop();
console.log("Sorry Mr ".concat(guest3, " you are not invited!"));
var guest4 = guestlist.pop();
console.log("Sorry Mr ".concat(guest4, " you are not invited!"));
for (var i = 0; i < guestlist.length; i++)
    (console.log("Mr. ".concat(guestlist[i], " you are still invited")));
guestlist.pop();
guestlist.pop();
console.log(guestlist);
