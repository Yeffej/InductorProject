import PageManager from "./pageManager.js";
import CustomAlert from "../Extensions/CustomAlert.js";

// Variables que necesito que sean globales dentro de la función:
const Manager = new PageManager();
let AlertTimeout;

function ListenersAdder(path) {

    if(path === "/") {
        const startBt = document.querySelector("#Home_startBT")
        const CancelModal = document.getElementById("modalCancel")
        const continueModal = document.getElementById("modalContinue");
        const lawsPage = document.getElementById("page-laws")
        const modal = document.querySelector("#Home_modal");

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

        continueModal.addEventListener("click", ()=> lawsPage.click())

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