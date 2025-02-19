class pageManager {
    /**
     * Show or hide a modal by its type.
     * @param {string} type - Type of modal."home" | "parameters".
     */
    ToggleModal(type) {
        if(type === "home") {
            const modalContainer = document.querySelector("#modalContainer");
            const modal = document.querySelector("#Home_modal");

            modal.addEventListener("animationend", (e)=>{
                if(e.animationName == "ModalOut")
                    modalContainer.classList.remove("show");
            })

            if (modal.style.animationName === "ModalOut" || modal.style.animationName === "") {
                modalContainer.classList.add("show")
                modal.style.animationName = "ModalIn"
            }else {
                modal.style.animationName = "ModalOut"
            }
        }else if(type === "parameters") {
            const modalContainer = document.querySelector("#ParametersModal-hi");
            const modal = document.querySelector(".Parameters_ModalGreeting");

            modal.addEventListener("animationend", (e)=>{
                if(e.animationName == "ModalOut")
                    modalContainer.classList.remove("show");
            })

            if (modal.style.animationName === "ModalOut" || modal.style.animationName === "") {
                modalContainer.classList.add("show")
                modal.style.animationName = "ModalIn"
            }else {
                modal.style.animationName = "ModalOut"
            }

        }else {
            console.error("This type of modal does not exist")
            return;
        }

    }

    /**
     * Shows the home image.
     */
    ShowHomeIMG() {
        const HomeImg = document.querySelector("#HomeIMG");
        HomeImg.style.animationName = "FadeIn";
    }
    
    /**
     * Toggles the final modal of the parameters section on and off.
     * If the modal is not currently showing, it will be shown with the animation "ModalIn";
     * if the modal is currently showing, it will be hidden with the animation "ModalOut".
     * @function
     * @memberof PageManager
     */
    ToggleFinalModal() {
        const modalContainer = document.querySelector("#ParametersModal-bye");
        const modal = document.querySelector(".Parameters_ModalBye");

        modal.addEventListener("animationend", (e)=>{
            if(e.animationName == "ModalOut")
                modalContainer.classList.remove("show");
        })

        if (modal.style.animationName === "ModalOut" || modal.style.animationName === "") {
            modalContainer.classList.add("show")
            modal.style.animationName = "ModalIn"
        }else {
            modal.style.animationName = "ModalOut"
        }
    }

}

export default pageManager;