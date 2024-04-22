/* Question32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need
to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

let current_users: string[] = [`Wajahat Hussain` , `Andrew Tate` , `Iman Gadhzi` , `David Goggins` , `Vladmir Hitler`]
let new_users: string[] = [`TOP G` , `Kim Jong Un` , `Abu Obaida` , `Osama Bin Laden` , `Lewis Hamilton`]

// we will use ForEach Method
new_users.forEach(new_user =>{
    let new_userlower = new_user.toLowerCase();
    // we will use some method
let userNameTaken = current_users.some(current_user => current_user.toLowerCase() === new_userlower);

// now we will apply conditions
if (userNameTaken){
    console.log(`${new_user} username has already taken please choose a new username `);
}else{
    console.log(`${new_user} is the new member added\n`);
    current_users.push(new_user)
}
});

console.log(current_users);