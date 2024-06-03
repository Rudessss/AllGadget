// toogle menu bar
var navLinks = document.getElementById("nav-links");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}
// rotating banner
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter>3) counter=1;
}, 3000)

function checkPassword(password){
    if(password.length < 8){
        return false
    }

    isAlpha = false
    isNum = false

    for(var i=0; i<password.length; i++){
        if(isNaN(password[i])){
            isAlpha = true
        }
        else{
            isNum = true
        }
        if(isNum && isAlpha){
            return true
        }
    }

    return false
}

// Pop up Gallery

function showpopup(pid){
    document.getElementById('popup'+pid).style.display='block'
}
function closepop(pid){
    document.getElementById('popup'+pid).style.display='none'
}

function validateForm(event){
    var username = document.getElementById("username").value 
    var email = document.getElementById("email").value 
    var password = document.getElementById("password").value
    var phonenumber = document.getElementById("phonenumber").value
    var gender = document.getElementById("gender").value
    var checkbox = document.getElementById("checkbox").checked

    event.preventDefault()

    if(username == ""){
        alert("Username cannot be empty")
    }
    else if(!email.endsWith("@email.com")){
        alert("Email used must ends with @email.com")
    }
    else if(!checkPassword(password)){
        alert("Password must be at least 8 characters and is alphanumeric")
    }
    else if(phonenumber=="" || phonenumber.charAt(0) != 0 || phonenumber.charAt(1) != 8 || phonenumber.length<8){
        alert("Phone number must start with '08' and minimal 8 numbers")        
    }
    else if(gender == "empty"){
        alert("Please choose a gender")
    }
    else if(!checkbox){
        alert("Please agree to our Terms and Conditions")
    }
}