import Loader from "../Templates/Loader.js";
import ListenersAdder from "./ListenersAdder.js";

class Router {
    constructor(ALL_ROUTES) {
        this.routes = ALL_ROUTES
        this.initialRoute = "/#/"
        if (window.location.pathname !== "/") {
            this.primaryRoute = window.location.pathname.split("/").join("");
            
        }else {
            this.primaryRoute = "";  
        }
        this.LoadInitialRoute();
    }
    LoadInitialRoute() {
        const routeInt = `${window.location.pathname}${this.initialRoute}`
        window.history.pushState({}, "", routeInt)
        this.loadRoute(routeInt);
    }
    loadRoute(Path) {
        const Rpath = Path.replace(/^.*#/, "")
        console.log(Rpath)
        console.log(Path)
        const matchedRoute = this.matchRouteWithRoutes(Rpath)
        if(matchedRoute){
            const finalRoute = `#${Rpath}`
            window.history.pushState({}, "", finalRoute)
            const target = document.querySelector("#app")
            target.innerHTML = Loader();

            setTimeout(() => {
                target.innerHTML =  matchedRoute.template, 3000;
                ListenersAdder(Rpath);
            }, 3000)

        }else
            return;
    }
    matchRouteWithRoutes(Path) {
        const matchedRoute = this.routes.find(route => {
            const processRoute = route.url
            return processRoute === Path
        });
        if(matchedRoute) {
            return matchedRoute
        }else {
            return null;
        }
    }
}

export default Router;