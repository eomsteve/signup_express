
let passowrd = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
validatePassword=function(){
    if(password.value != confirmPassword.value)
        confirmPassword.setCustomValidity("Passwords Don't Match");
    else
        confirmPassword.setCustomValidity(" ")
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;