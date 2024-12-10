
document.addEventListener('DOMContentLoaded', () => {
    let logOut = document.querySelector("#logOut")
    let users = JSON.parse(localStorage.getItem("users"));
    let username = document.querySelector("#username")
    console.log('DOMContentLoaded in second.js fired');
    const index = JSON.parse(localStorage.getItem('userIndex'))
    console.log('Index in second.js:', index); 
    username.innerHTML = `Welcome ${users[index].name}`
    if(logOut){
        logOut.addEventListener("click",function(){
            window.open("index.html","_self")
        })
    }
});

