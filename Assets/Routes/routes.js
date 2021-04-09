import Home from "../Templates/Home.js"
import Concepts from "../Templates/Conceptos.js"
import Podcast from "../Templates/Podcast.js"
import parameters from "../Templates/Parametros.js"
import Laws from "../Templates/Leyes.js"

const ALL_ROUTES = [
    {
        name: "Home",
        url: "/",
        template: ()=> Home(),
    },
    {
        name: "Leyes",
        url: "/leyes",
        template: ()=> Laws(),
    },
    {
        name: "Conceptos",
        url: "/conceptos",
        template: ()=> Concepts(),
    },
    {
        name: "Parametros",
        url: "/parametros",
        template: ()=> parameters(),
    },
    {
        name: "Podcast",
        url: "/podcast",
        template: ()=> Podcast(),
    },
]


export default ALL_ROUTES;