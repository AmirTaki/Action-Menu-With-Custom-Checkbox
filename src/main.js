const inputs = document.querySelectorAll('input')
const icons = document.querySelectorAll("i")

inputs.forEach((input, index) => {
    input.addEventListener("click", (e)=> {
        icons[index].style.left = "calc(100% - 12.5px)"
    })
})