// Make a list of five or more usernames called current_users.
let current_users : string[]=["Aun","TaHa","Tabish","Bilal","KausAr"];


// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ["kkk","kamal","sadia","TaHa","KausAr"];

// Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
new_users.forEach(newUsername =>){


    let lowerCase = newUsername .tolowercase();
    if(current_users.map(c_user => c_user.toLowerCase())).includes(lowerCase){
console.log(`the username ${newusername} is not available.pls write diffrent username`);
    }
}
else{
    console.log(`the username `${newusername} is available`)
}