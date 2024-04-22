/* Question45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model
name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other
name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored
correctly.
*/

function carInformation (Manufacturer: String , Model: String, ...additionalInfo: (string | number)[][]){
    let car = {Manufacturer, Model, ...Object.fromEntries(additionalInfo)};
    return car;
    };
    
    let mycarInformation = carInformation("CLS", "63", ["Color" , "Black"], ["Year" , 2004]);
    
    console.log(mycarInformation);