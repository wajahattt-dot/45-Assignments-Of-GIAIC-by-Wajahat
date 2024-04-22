/* Question 15; Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll
have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/
var guestlist = ["Wajahat", "Tashif", "Nabeel", "Asharib"];
console.log("Due to some reason Mr.".concat(guestlist[2], " is not coming at my dinner\n"));
guestlist[2] = "Andrew";
console.log("New list of members coming at my dinner");
for (var i = 0; i < guestlist.length; i++) {
    console.log("".concat(i + 1, ". Mr. ").concat(guestlist[i], "! I would like to invite you at dinner on Monday"));
}
