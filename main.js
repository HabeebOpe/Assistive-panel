const items = document.querySelectorAll("li")
const body = document.querySelector("body")
const notifText = document.querySelector(".notif-text")
const notifIcon = document.querySelector("#notif-icon")
const themeText = document.querySelector(".theme-text")
const themeIcon = document.querySelector("#theme-icon")

items.forEach((item) => {
    item.addEventListener("click", (e)=> {
        e.preventDefault()
        body.classList.toggle("open-notif")
        setTimeout(() => {
            body.classList.remove("open-notif")
        }, 1000)
        item.classList.toggle("border");
        if(item.classList.contains("wifi")){
            notifIcon.classList = "fa fa-wifi"
            notifText.textContent = "Wifi is turned on"
        }
        else if(item.classList.contains("location")){
            notifIcon.classList = "fa fa-location-dot"
            notifText.textContent = "Location is turned on"
        }
        else if(item.classList.contains("bluetooth")){
            notifIcon.classList = "fa-brands fa-bluetooth-b"
            notifText.textContent = "Bluetooth is turned on"
        }
        else if(item.classList.contains("flashlight")){
            notifIcon.classList = "fa fa-lightbulb"
            notifText.textContent = "Flashlight is turned on"
        }
        else if(item.classList.contains("airplane")){
            notifIcon.classList = "fa fa-plane"
            notifText.textContent = "Airplane is turned on"
        }
        else if(item.classList.contains("theme")){
            body.classList.toggle("dark")
            if(body.classList.contains("dark")){
                notifIcon.classList = "fa fa-moon"
                notifText.textContent = "Dark mode turned on"
                themeText.textContent = "Light mode"
                themeIcon.classList = "fa fa-sun"
            }
            else{
                notifIcon.classList = "fa fa-sun"
                notifText.textContent = "Light mode turned on"
                themeText.textContent = "Dark mode"
                themeIcon.classList = "fa fa-moon"
            } 
        }
        
        
    })
    /* let bluetooth = item.bluetooth
     console.log(bluetooth)*/
    
})