

let body = document.querySelector('body')
let dark = document.getElementById("darkMode")


const checkMode = () => {
    if (dark.checked == true){
        body.classList.add("darkMode")
    }
    else {
        body.classList.remove("darkMode")
    }
}
dark.addEventListener("click", () => {
     checkMode ()
})