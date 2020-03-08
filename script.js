/** @type {HTMLInputElement} */
var passwordBox = document.getElementById("password-box");
/** @type {HTMLParagraphElement} */
var strengthIndicator = document.getElementById("strength-indicator");

passwordBox.addEventListener("input", function(e) {
    if(passwordBox.value.length >= 1000000) {
        strengthIndicator.textContent = "This password is moderate strength.";
    } else {
        strengthIndicator.textContent = "The password is too weak.";
    }
});
