import PageManager from "./pageManager.js";
import CustomAlert from "../Extensions/CustomAlert.js";

// global vars
const Manager = new PageManager();
let AlertTimeout;
let UserName = "";

/**
 * A function that adds event listeners to the pages based on the given path.
 * @param {string} path The path to add the event listeners to.
 */
function ListenersAdder(path) {

    if(path === "/") {
        const startBt = document.querySelector("#Home_startBT")
        const CancelModal = document.getElementById("modalCancel")
        const continueModal = document.getElementById("modalContinue");
        const lawsPage = document.getElementById("page-laws")
        const nameGetter = document.querySelector("#NameGetter")
        const formGetter = document.querySelector("#HomeModalform")
        UserName = "";

        function alertErrorName() {
            CustomAlert({
                type: "error",
                title: "Por favor Ingresa tu Nombre",
                text: `No se ha ingresado ningún nombre o alias, por favor ingresar 
                uno para poder continuar o <strong>recuerda dar Enter</strong> si has ingresado un valor.`,
            })
        }

        function setUsername() {
            UserName = nameGetter.value
            formGetter.style.animationName = "FadeOut"
            CustomAlert({
                type: "success",
                title: "Guardado Exitoso",
                text: `Gracias por ingresar su nombre o alias, el cual ha sido guardado
                con éxito, ya puedes continuar.`,
            })
        }

        startBt.addEventListener("click", ()=> {
            Manager.ToggleModal("home")
        })
        CancelModal.addEventListener("click", ()=> {
            Manager.ToggleModal("home")
        })

        continueModal.addEventListener("click", ()=>  {
            if(nameGetter.value) {
                setUsername()
                setTimeout(() => lawsPage.click(), 2000)
                return;
            }

            alertErrorName()
        })

        formGetter.addEventListener("submit", (e)=> {
            e.preventDefault();
            if(nameGetter.value) {
                setUsername()
            }else 
                alertErrorName();
        })

        // Mostrando un alert para preguntarle al usuario.
        AlertTimeout = setTimeout(()=> {
            const ConfirmationsBT = CustomAlert({
                type: "info",
                title: "Bienvenido al Home",
                text: `¿Te gustaría ver la imagen de un inductor? Responde: Ok | o mejor la ves cuando 
                hablemos del tema profundida? Responde: No`,
                confirmation: true,
            })
            const rmAlert = () => {
                const AlertWrapper = ConfirmationsBT[0].parentElement.parentElement;
                const AlertOut = () => {
                    AlertWrapper.remove()
                    AlertWrapper.removeEventListener("animationend", AlertOut)
                }
                AlertWrapper.style.animation = "GetOut 1s forwards ease-in-out"
                AlertWrapper.addEventListener("animationend", AlertOut)
            }

            ConfirmationsBT[0].addEventListener("click", ()=> {
                rmAlert()
                Manager.ShowHomeIMG();
            })
            ConfirmationsBT[1].addEventListener("click", ()=> {
                rmAlert()
            })

        }, 3000)

    }
    if(path === "/leyes") {
        clearTimeout(AlertTimeout)

        const ContinueBT = document.querySelector(".Laws_NextBT")
        const Concepts = document.getElementById("page-concepts")
        const introShower = document.querySelector("#Laws_ShowWriter")
        const LawsIntro = document.querySelector(".Laws_intro")
        const LawsWritters = getLawsWritters();
        const Content = document.querySelector(".Laws_content")
        
        function getLawsWritters() {
            const writters = document.querySelectorAll(".LawsWritter_son")
            return [...writters];
        }

        ContinueBT.addEventListener("click", ()=> {
            ContinueBT.style.animationName = "RotateOut"
        })
        ContinueBT.addEventListener("animationend", ()=> Concepts.click() )

        introShower.addEventListener("click", ()=> {
            LawsIntro.style.animationName = "FadeIn";
        })
        LawsIntro.addEventListener("animationend", ()=> {
            setTimeout(()=> {
                LawsWritters.forEach(wrt => {
                    wrt.style.animationName = "WritterText, WritterTab";
                });
            }, 2000) 
        })
        LawsWritters[2].addEventListener("animationend", ()=> {
            setTimeout(()=> {
                Content.style.animationName = "FadeIn";
            }, 1500) 
        })
        

    }
    if(path === "/conceptos") {
        clearTimeout(AlertTimeout)
        const plusBTs = document.querySelectorAll(".Concepts_art_showBT")
        const infoDisplays = document.querySelectorAll(".Concepts_art_Info")
        const ContinueBT = document.querySelector(".Concepts_NextBT")
        const Parameters = document.getElementById("page-parameters")

        plusBTs[0].addEventListener("click", ()=> {
            if(!plusBTs[0].style.animationName || 
                plusBTs[0].style.animationName === "RotatePlusIn" ) {

                plusBTs[0].style.animationName = "RotatePlusOut"
                infoDisplays[0].style.maxHeight = "600px"
            } else {
                plusBTs[0].style.animationName = "RotatePlusIn"
                infoDisplays[0].style.maxHeight = "0px"
            }
        })
        plusBTs[1].addEventListener("click", ()=> {
            if(!plusBTs[1].style.animationName || 
                plusBTs[1].style.animationName === "RotatePlusIn" ) {

                plusBTs[1].style.animationName = "RotatePlusOut"
                infoDisplays[1].style.maxHeight = "600px"
            } else {
                plusBTs[1].style.animationName = "RotatePlusIn"
                infoDisplays[1].style.maxHeight = "0px"
            }
        })
        plusBTs[2].addEventListener("click", ()=> {
            if(!plusBTs[2].style.animationName || 
                plusBTs[2].style.animationName === "RotatePlusIn" ) {

                plusBTs[2].style.animationName = "RotatePlusOut"
                infoDisplays[2].style.maxHeight = "600px"
            } else {
                plusBTs[2].style.animationName = "RotatePlusIn"
                infoDisplays[2].style.maxHeight = "0px"
            }
        })

        ContinueBT.addEventListener("click", ()=> {
            ContinueBT.style.animationName = "RotateOut"
        })
        ContinueBT.addEventListener("animationend", ()=> Parameters.click() )

    }
    if(path === "/parametros") {
        clearTimeout(AlertTimeout)
        const hideModalBT = document.querySelector("#modalOkBT")
        const ByeModalBt = document.querySelector(".Parameters_byeBT") // button to show the byeModal
        const ContinueBT = document.querySelector(".Parameters_NextBT")
        const Podcast = document.getElementById("page-podcast")
        const closeByeModal = document.querySelector("#modalByeBT")

        const quitPulseAnimation = ()=>  ContinueBT.style.animationName = "none";
        const setPulseAnimation = ()=>  ContinueBT.style.animationName = "Pulse"

        setTimeout(()=> Manager.ToggleModal("parameters"), 1000)
        hideModalBT.addEventListener("click", ()=> Manager.ToggleModal("parameters"))

        ByeModalBt.addEventListener("click", ()=> {
            ByeModalBt.style.animationName = "None"
            Manager.ToggleFinalModal()
        })

        ContinueBT.addEventListener("click", ()=> {
            ContinueBT.removeEventListener("mouseover", quitPulseAnimation)
            ContinueBT.removeEventListener("mouseout", setPulseAnimation)

            ContinueBT.style.animationName = "RotateOut"
            ContinueBT.style.animationIterationCount = "1"

        })
        ContinueBT.addEventListener("animationend", ()=> Podcast.click() )

        closeByeModal.addEventListener("click", ()=> {
            Manager.ToggleFinalModal()
            ContinueBT.style.animationName = "Pulse"
            ContinueBT.addEventListener("mouseover", quitPulseAnimation)
            ContinueBT.addEventListener("mouseout", setPulseAnimation)
        })
    }
    if(path === "/podcast") {
        clearTimeout(AlertTimeout)
        const audioPodCast = document.querySelector("iframe")

        audioPodCast.addEventListener("load", ()=> {
            setTimeout(()=> {
                CustomAlert({
                    type: "success",
                    title: "Carga completa",
                    text: `El audio se ha cargado correctamente, gracias por esperar.`,
                })
                audioPodCast.style.animationName = "FadeIn";
            }, 2000)
            
        })
        audioPodCast.addEventListener("error", (e)=> {
            console.log(e)
            CustomAlert({
                type: "error",
                title: "Carga incompleta",
                text: `El audio no se pudo cargar, por favor recarge la pagina o revise su
                conexión a internet.`,
            })
        })

        CustomAlert({
            type: "warning",
            title: "Solicitando audio",
            text: `El audio se esta cargando, por favor espera unos segundos hasta 
            completar esta acción.`,
        })


    }
}

export default ListenersAdder;

export { UserName }