/*Question 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the
sandwich that is being ordered. Call the function three times, using a different number of arguments each time
*/

function mySandwiches (...items: String[]){
    return `I want a sandwich of ${items}`
   }
   let collection1 = mySandwiches ("Steak" , " Peri Peri Chicken" , " Lettuce" , " Cheese");
   let collection2 = mySandwiches ("Pepper" ,  " Chick" , " Turkey");
   let collection3 = mySandwiches ("Biryani");
   
   console.log(collection1);
   console.log(collection2);
   console.log(collection3);