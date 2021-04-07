import Router from "./router.js"
import ALL_ROUTES from "../Routes/routes.js"

const pageRouter = new Router(ALL_ROUTES)

window.addEventListener("hashchange", (e)=> {
    e.preventDefault()
    pageRouter.loadRoute(window.location.hash)
})