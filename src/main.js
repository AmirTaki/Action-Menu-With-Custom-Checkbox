let body = document.querySelector('body')
let dark = document.getElementById("darkMode")

dark.addEventListener("click", () => {
    body.classList.toggle(dark.checked == true  ? "darkMode":"darkMode")
})