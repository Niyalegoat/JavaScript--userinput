let Username = window.prompt(" What's your username? ");

console.log(username);

let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value; 
    console.log(username);
}
document.getElementById("welcome") .textContent = ' Hello , ${username}!'; }