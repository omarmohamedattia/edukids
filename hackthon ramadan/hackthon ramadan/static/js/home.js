let signupbtn = document.getElementById("signupbtn")
let signinbtn = document.getElementById("signinbtn")
let namefield = document.getElementById("namefield")
let title = document.getElementById("title")
//chabge the page to sign in
signinbtn.onclick = function(){
    namefield.style.maxHeight = "0"
    title.innerHTML= "login "
    signupbtn.classList.add("disable")
    signinbtn.classList.remove("disable")
}
signupbtn.onclick = function(){
    namefield.style.maxHeight = "60px"
    title.innerHTML= "sign up"
    signupbtn.classList.remove("disable")
    signinbtn.classList.add("disable")
}
function gohome(){
    window.location= "home.html"
}
