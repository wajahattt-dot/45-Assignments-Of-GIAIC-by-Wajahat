/* Question 20:  Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or 
anything else you’d like. Write a program that creates a list containing these items.
*/

let languages: string[] = [`Pennsylvania` , `Washington` , `Texas` , `California` , `New York` , `Oklohama` , `Indiana` , `Mexico` , `Kentucky`]

for(let i=0;i<languages.length;i++){
    console.log(`${languages[i]}`);
}