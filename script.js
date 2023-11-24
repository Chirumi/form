const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")

password1.addEventListener("mousedown", () => {
    if (password1.value == "" || password2.value == "") {
        console.log("NO INPUTS")
    } 
    else {
        if (password1.value == password2.value) {
            console.log("MATCH!")
        }
        else {
            console.log("ERROR")
        }
    }
})