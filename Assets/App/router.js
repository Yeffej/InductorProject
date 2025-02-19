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

    /**
     * Initializes and loads the initial route by constructing the route path using the current
     * window location and the initial route. It then updates the browser history and loads the route.
     */
    LoadInitialRoute() {
        const routeInt = `${window.location.pathname}${this.initialRoute}`
        window.history.pushState({}, "", routeInt)
        this.loadRoute(routeInt);
    }
    
    /**
     * Loads the route given the route path. It replaces the current window history with the given path
     * and loads the corresponding route. If the route does not exist, it does nothing.
     * @param {string} Path the route path to load
     */
    loadRoute(Path) {
        const Rpath = Path.replace(/^.*#/, "")
        const matchedRoute = this.matchRouteWithRoutes(Rpath)
        if(matchedRoute){
            const finalRoute = `#${Rpath}`
            window.history.pushState({}, "", finalRoute)
            const target = document.querySelector("#app")
            target.innerHTML = Loader();

            setTimeout(() => {
                target.innerHTML = matchedRoute.template();
                ListenersAdder(Rpath);
            }, 3000)

        }else
            return;
    }

    /**
     * Finds the route in the routes array that matches the given path.
     * @param {string} Path the path to match
     * @returns {Object} the matched route if any, null otherwise
     */
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