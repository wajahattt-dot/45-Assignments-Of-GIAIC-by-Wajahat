//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personname: String = "Wajahat"
console.log (personname.toLowerCase())
console.log (personname.toUpperCase())
console.log (personname.charAt(0).toUpperCase()+personname.slice(1).toLowerCase());