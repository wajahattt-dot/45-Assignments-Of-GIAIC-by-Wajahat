/* Question 37; Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
// function make_shirt(size:string , label:string){
// return size + label 
// }
// let myAssignment = make_shirt(`Large` , ` I Love Typescript`);
// console.log(myAssignment);
// Making large as Default
function make_shirt(label, size) {
    if (size === void 0) { size = "Large"; }
    return size + label;
}
var myAssignment = make_shirt(" Free Palestine");
console.log(myAssignment);
// Making Medium as Default
// function make_shirt(label:string , size: string = `Medium`){
// return size+ label
// }
// let myAssignment = make_shirt(` I Love Typescript`);
// console.log(myAssignment);
// Making any size shirt with different message
// function make_shirt(label:string = ` Dive into Coding` , size: string = `Small`){
// return size+ label
// }
// 
// console.log(make_shirt());
