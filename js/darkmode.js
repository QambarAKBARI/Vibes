const darkModeBtn = document.querySelector("#darkModeBtn")

darkModeBtn.addEventListener("click", (event) => {
    event.preventDefault()
    document.body.classList.toggle("darkMode")
})