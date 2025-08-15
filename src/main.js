// const inputs = document.querySelectorAll('.action')
// const icons = document.querySelectorAll("i")

// inputs.forEach((input, index) => {
//     input.addEventListener("click", (e)=> {
//         icons[index].insertAdjacentHTML = "calc(100% - 12.5px)"
//     })
// })


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