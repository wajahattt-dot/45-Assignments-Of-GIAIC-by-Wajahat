/* Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several
examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */
var mytrans = ['Apollo', 'Porsche', 'Yacht', 'Mercedes', 'Rollce Royce', 'Bugatti'];
// 1st Method
for (var i = 0; i < mytrans.length; i++) {
    console.log("I would like to own a ".concat(mytrans[i]));
}
// 2nd Method
// mytrans.map((i)=>{
//   console.log(`I would to like to own a ${i}`)
// })
