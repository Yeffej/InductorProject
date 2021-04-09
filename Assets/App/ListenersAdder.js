import PageManager from "./pageManager.js";
import CustomAlert from "../Extensions/CustomAlert.js";

// Variables que necesito que sean globales dentro de la función:
const Manager = new PageManager();
let AlertTimeout;
let UserName = "";

function ListenersAdder(path) {

    if(path === "/") {
        const startBt = document.querySelector("#Home_startBT")
        const CancelModal = document.getElementById("modalCancel")
        const continueModal = document.getElementById("modalContinue");
        const lawsPage = document.getElementById("page-laws")
        const modal = document.querySelector("#Home_modal");
        const nameGetter = document.querySelector("#NameGetter")
        const formGetter = document.querySelector("#HomeModalform")
        UserName = "";

        function alertErrorName() {
            CustomAlert({
                type: "error",
                title: "Por favor Ingresa tu Nombre",
                text: `No se ha ingresado ningún nombre o alias, por favor ingresar 
                uno para poder continuar.`,
            })
        }

        startBt.addEventListener("click", ()=> {
            Manager.ToggleModal("home")
        })
        CancelModal.addEventListener("click", ()=> {
            Manager.ToggleModal("home")
        })

        modal.addEventListener("animationend", (e)=>{
            if(e.animationName == "ModalOut")
                modalContainer.classList.remove("show");
        })

        continueModal.addEventListener("click", ()=>  {
            console.log(nameGetter.value)
            if(UserName) {
                lawsPage.click()
                return;
            }
            alertErrorName()
        })

        formGetter.addEventListener("submit", (e)=> {
            e.preventDefault();
            if(nameGetter.value) {
                UserName =  nameGetter.value
                formGetter.style.animationName = "FadeOut"
                CustomAlert({
                    type: "success",
                    title: "Guardado Exitoso",
                    text: `Gracias por ingresar su nombre o alias, el cual ha sido guardado
                    con éxito, ya puedes continuar.`,
                })
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
                const AlertWrapper = ConfirmationsBT[0].parentElement
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

        }, 5000)

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

    }
    if(path === "/parametros") {
        clearTimeout(AlertTimeout)
    }
    if(path === "/podcast") {
        clearTimeout(AlertTimeout)
    }
}

export default ListenersAdder;

export { UserName }