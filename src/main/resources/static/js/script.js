let msgNumber = 0;
let userName, userEmail, enter;

function start(){
    msgNumber = 1;
    userName = localStorage.getItem("name");
    userEmail = localStorage.getItem("email");
    enter = localStorage.getItem("enter");
    console.log(userName);
    console.log(userEmail);
    console.log(enter);

    if(enter == null)
        window.location.href = "http://localhost:8080/login";

    document.getElementById("userName").innerHTML = userName;
    localStorage.removeItem("enter");

    // document.getElementById("clickBtn").addEventListener("click", move_leftPage, false);
    document.getElementById("logoutBtn").addEventListener("click", logout, false);
    document.getElementById("inputBtn").addEventListener("click", getInputMessage, false);
    document.getElementById("inputText").addEventListener("keydown", function(event){
        if(event.key == "Enter"){
            if(!event.shiftKey)
                getInputMessage();
        }
    });
}

// function move_leftPage(){
//     const leftPage = document.getElementById("leftPage");
//     const mainPage = document.getElementById("mainPage");
//     count++;
//
//     if(count % 2){
//         for(let i=0, w = 0; i<25; i++){
//             window.setTimeout(() => {
//                 w++;
//                 // console.log(w);
//                 leftPage.style.width = w + "%";
//                 mainPage.style.width = 100-w + "%";
//             }, 8*i);
//         }
//     }
//     else{
//         for(let i=0, w=25; i<25; i++){
//             window.setTimeout(() => {
//                 w--;
//                 // console.log(w);
//                 leftPage.style.width = w + "%";
//                 mainPage.style.width = 100-w + "%";
//             }, 8*i);
//         }
//     }
// }

function logout(){
    localStorage.clear();
    window.location.href = "http://localhost:8080/login";
}

window.addEventListener("load", start, false);