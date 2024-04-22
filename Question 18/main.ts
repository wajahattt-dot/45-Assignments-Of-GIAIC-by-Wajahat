/*Question 18: Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

let places: String[] = [`Romania` ,  `Switzerland` ,  `Russia`  , `Saudia Arab` , `Germany`]; 
console.log(places);

// make a copy af an array
let copyofArray = places.slice()
let sortedArray = copyofArray.sort()
console.log(sortedArray);

// printing Original Array
console.log (places);

// Reverse Alphabetical Order 
let copyofArray2 = sortedArray.slice();
let reversesortedArray = sortedArray.reverse();
console.log(reversesortedArray);

// printing Original Array 
console.log(places);

// Reverse Original Array
let reverseoriArray = places.reverse();
console.log (reverseoriArray);

// Reverse original Array Again to get back to its original position
let reverseoriArray2 = reverseoriArray.reverse()
console.log(reverseoriArray2);

// Sorted Array
let sortedarray = places.sort()
console.log (sortedarray);

// reverse Sorted Array 
let reversesortedarray = sortedarray.reverse()
console.log (reversesortedarray);