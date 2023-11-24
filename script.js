// FOR IMPROVEMENT AND CLEAN CODE:
// Make all JS styles into a "error" and "correct" classes according
// therefore you only have to remove classes and add classes
// depending if the password boxes match each other

const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")
const errorMsg = document.getElementById("errorMsg")

password1.addEventListener("mousedown", () => passwordChecker())
password2.addEventListener("mousedown", () => passwordChecker())

function passwordChecker() {
    if (password1.value == "" || password2.value == "") {
        console.log("NO INPUTS")
    } 
    else {
        if (password1.value == password2.value) {
            console.log("MATCH!")
            password1.style.borderColor = "green"
            password2.style.borderColor = "green"
            errorMsg.textContent = "* Passwords match!"
            errorMsg.style.color = "green"
        }
        else {
            console.log("ERROR")
            password1.style.borderColor = "red"
            password2.style.borderColor = "red"
            errorMsg.textContent = "* Passwords do not match!"
            errorMsg.style.color = "red"
        }
    }
}