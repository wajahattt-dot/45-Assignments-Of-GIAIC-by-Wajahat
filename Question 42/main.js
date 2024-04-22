/* Question 42:  Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of
magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/
var magicians = ["Asim", "Junaid", "Rashid", "Muneer", "Bajwa"];
function show_magicians(greet) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var Names = magicians_1[_i];
        console.log(greet, Names);
    }
}
;
show_magicians("The Great");
show_magicians("Hello, How are you Mr.");
