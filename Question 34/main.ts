/* Question 34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the
name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you
should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or
more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
*/

let favPizza: string[] = [`Pepperoni Pizza` , `Fajita Pizza` , `Supreme Pizza`]

for(let i=0;i<favPizza.length;i++){
console.log(favPizza[i])
}

for(let i=0;i<favPizza.length;i++){
    console.log(`I ilke ${favPizza[i]}`);
}

console.log(`\nMy favorite food is pizza because it is delicious, has many different toppings to choose from, and you can get it anytime.
Pizza tastes good at any time of the day. We've been eating pizza every once a month for as long as I can remember. I really love Pizza!`);