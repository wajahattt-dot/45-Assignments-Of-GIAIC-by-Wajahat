/* Question 43:  Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.Call show_magicians() with each array to
show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ["Qamar", "Asim", "Fahad", "Muneer", "Bajwa"];
var magiciancopy = __spreadArray([], magicians, true);
function show_magicians(greet) {
    var withgreetings = "";
    for (var _i = 0, magiciancopy_1 = magiciancopy; _i < magiciancopy_1.length; _i++) {
        var Names = magiciancopy_1[_i];
        withgreetings += "".concat(greet, " ").concat(Names, "\n");
    }
    return withgreetings;
}
;
var mygreetings = show_magicians("Hello");
var makeArray = mygreetings.split("\n");
console.log(makeArray);
//Original Array
console.log(magicians);
