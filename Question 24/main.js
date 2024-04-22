/* Question 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
// equality or not equality with strings  and lower case function
var myCountry = ("Pakistan");
console.log(myCountry == "Pakistan"); // equal to
console.log(myCountry !== "pakistan"); // not equal to
// // Numeric Tests
var number = 15;
console.log(number == 15); // equal to 
console.log(number !== 15); // not equal to
console.log(number > 10); // greater than 
console.log(number < 10); // less than
console.log(number >= 10); // greater than or equal to
console.log(number <= 10); // less than or equal to
// using `and` and `or` operators
var num1 = 10;
var num2 = 5;
console.log(num1 < 15 && num2 > 10);
console.log(num1 < 15 || num2 > 9);
// Array or not in a Array 
var array = [15, 10, "Wajahat"];
var string = ("Hussain");
console.log(Array.isArray(array));
console.log(Array.isArray(string));
