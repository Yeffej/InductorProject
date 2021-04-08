import Router from "./router.js"
import ALL_ROUTES from "../Routes/routes.js"

const pageRouter = new Router(ALL_ROUTES)
const navigationBTs = GetNavBTs();
const hrefs = ["/#/", "/#/leyes", "/#/conceptos", "/#/parametros", "/#/podcast"]

window.addEventListener("hashchange", (e)=> {
    e.preventDefault()
    pageRouter.loadRoute(window.location.hash)
})


function GetNavBTs() {
    const bts = document.querySelectorAll(".nav-bt")   
    return Array.from(bts);
}

function SetNavBTsHref() {
    for(let i = 0; i < hrefs.length; i++) {
        navigationBTs[i].href = `${pageRouter.primaryRoute}${hrefs[i]}`
    }
}

SetNavBTsHref();