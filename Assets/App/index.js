import Router from "./router.js"
import ALL_ROUTES from "../Routes/routes.js"

const pageRouter = new Router(ALL_ROUTES)
const navigationBTs = GetNavBTs();
const hrefs = ["#/", "#/leyes", "#/conceptos", "#/parametros", "#/podcast"]

window.addEventListener("hashchange", (e)=> {
    e.preventDefault()
    pageRouter.loadRoute(window.location.href)
})

function GetNavBTs() {
    const bts = document.querySelectorAll(".nav-bt")   
    return Array.from(bts)
}

function SetNavBTsHref() {
    for(let i = 0; i < hrefs.length; i++) {
        navigationBTs[i].href = `${hrefs[i]}`
    }
}

SetNavBTsHref()

// add esencials functionalities for the app
window.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn")
    const menu = document.getElementById("nav")
    const hamburgerBtn = menuBtn.querySelector(".hamburger-icon")
    const closeBtn = menuBtn.querySelector(".close-icon ")

    const toggleShowMenu = () => {
        menuBtn.classList.toggle("active")
        menu.classList.toggle("active")
    }
    hamburgerBtn.addEventListener("click", toggleShowMenu)
    closeBtn.addEventListener("click", toggleShowMenu)
})
