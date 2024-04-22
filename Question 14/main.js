/* Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three
people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/
var guestlist = ["Wajahat", "Tashif", "Nabeel", "Asharib"];
// 1st Method 
for (var i = 0; i < guestlist.length; i++) {
    console.log("Mr. ".concat(guestlist[i], "! I would like to invite you at Dinner on Monday"));
}
// 2nd Method
// guestlist.map((i)=>{
// console.log (`Mr. ${[i]}! I would like to invite you at Dinner on Monday`);
// })
