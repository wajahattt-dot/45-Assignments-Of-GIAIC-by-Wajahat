/* Question 16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner
table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/
var guestlist = ["Wajahat", "Tashif", "Nabeel", "Asharib"];
console.log(guestlist);
console.log('Now we have three more friends to invite');
guestlist.unshift('Vladmir');
console.log(guestlist);
guestlist.splice(3, 0, 'Putin');
console.log(guestlist);
guestlist.push('TopG');
console.log(guestlist);
for (var i = 0; i < guestlist.length; i++) {
    console.log("Mr  ".concat(guestlist[i], "! I would like to invite you at dinner on Monday "));
}
