const setting_icon =document.querySelector(".setting_icon")
const setting_box =document.querySelector(".setting_box")
const setting_close =document.querySelector(".setting_close")
const body =document.querySelector("body")


setting_icon.addEventListener("click" ,function () {
body.style.height="80vh"
setting_box.style.right="0"
body.style.overflow="hidden"
})

setting_close.addEventListener("click" ,function () {
    setting_box.style.right="-400px"
     })
     