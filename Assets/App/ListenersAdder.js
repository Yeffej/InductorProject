import PageManager from "./pageManager.js";
import CustomAlert from "../Extensions/CustomAlert.js";
const Manager = new PageManager();

function ListenersAdder(path) {
    if(path === "/") {
        const startBt = document.querySelector("#Home_startBT")
        const CancelModal = document.getElementById("modalCancel")
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
        setTimeout(()=> {
            const ConfirmationsBT = CustomAlert({
                type: "info",
                title: "Bienvenido",
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

    }
    if(path === "/conceptos") {

    }
    if(path === "/parametros") {

    }
    if(path === "/podcast") {

    }
}

export default ListenersAdder;