import Loader from "../Templates/Loader.js";


class Router {
    constructor(ALL_ROUTES) {
        this.routes = ALL_ROUTES
        this.LoadInitialRoute();
        this.initialRoute = "/#/"
    }
    LoadInitialRoute() {
        window.history.pushState({}, "", this.initialRoute)
        const actualPath =  window.location.pathname
        this.loadRoute(actualPath);
    }
    loadRoute(Path) {
        const Rpath = Path.replace(/^#/, "")
        console.log(Rpath)
        const matchedRoute = this.matchRouteWithRoutes(Rpath)
        if(matchedRoute){
            window.history.pushState({}, "", "/#" + Rpath)
            const target = document.querySelector("#app")
            target.innerHTML = Loader();

            setTimeout(() => target.innerHTML =  matchedRoute.template, 3000)
            
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