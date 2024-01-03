const body = document.querySelector("body")
const statusText = document.querySelector(".status")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    body.classList.toggle("dark")
    if (body.classList.contains("dark")) {
        statusText.textContent = "Day"
    }
    else{
        statusText.textContent = "Night"
    }
})