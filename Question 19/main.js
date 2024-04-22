/* Question 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are
inviting to dinner.
*/
var guestlist = ["Wajahat", "Tashif", "Andrew", "Vladmir", "Putin"];
console.log("i am inviting ".concat(guestlist.length, " people at my dinner which are following\n"));
for (var i = 0; i < guestlist.length; i++) {
    console.log("".concat(i + 1, ". ").concat(guestlist[i]));
}
